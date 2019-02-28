import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes  from 'prop-types';
import Transition from 'react-transition-group/Transition';

class ItemPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            in: false
        };

        this.onBuyButtonClick = this.onBuyButtonClick.bind(this);
    }

    render() {
        let { location, product: { id, image, name, description, price }, cartProductsList } = this.props;
        let isProductInCart = cartProductsList.find(product => product.id === id);

        return (
            <Transition in={ this.state.in } timeout={0}>
                {state => {
                    return <div className={`item-preview item-preview--${ state }`}>
                        <Link to={ `${ location && location.pathname }/${ id }` } >
                            <div className="item-preview__image">
                                <img src={ __INTERNAL_API_URL__ + image } alt="alt"/>
                            </div>
                            <div className="item-preview__text">
                                <div className="item-preview__text__name">
                                    <h2>{ name }</h2>
                                </div>
                                <div className="item-preview__text__description">
                                    <p>{ description }</p>
                                </div>
                            </div>
                        </Link>
                        <div className="item-preview__controls">
                            <div className="item-preview__controls__price">
                                { price } грн
                            </div>
                            <div className="item-preview__controls__button">
                                <div className="button" onClick={ this.onBuyButtonClick }>
                                    { isProductInCart ? 'Товар в корзине' : 'Купить' }
                                </div>
                            </div>
                        </div>
                    </div>
                }}
            </Transition>
        );
    }

    componentDidMount() {
        this.setState({
            in: true
        });
    }

    componentWillUnmount() {
        this.setState({
            in: false
        });
    }

    onBuyButtonClick() {
        let { product, openCartModal, addCartProduct, cartProductsList } = this.props;

        if(cartProductsList.find(item => item.id === product.id)) {
            openCartModal();
        } else {
            addCartProduct({
                cartProduct: {
                    id: product.id,
                    quantity: 1
                }
            });
            openCartModal();
        }
    }
}

ItemPreview.propTypes = {
    product: PropTypes.object,
    addCartProduct: PropTypes.func,
    openCartModal: PropTypes.func,
    cartProductsList: PropTypes.array
};

export default ItemPreview;