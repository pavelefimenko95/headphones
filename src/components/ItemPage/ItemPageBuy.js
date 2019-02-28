import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ItemPageBuy extends Component {
    constructor(props) {
        super(props);

        this.onBuyButtonClick = this.onBuyButtonClick.bind(this);
    }

    render() {
        let { id, price, cartProductsList } = this.props;
        let isProductInCart = cartProductsList.find(item => item.id === id);

        return (
            <div className="item-page-buy">
                <div className="item-page-buy__controls">
                    <div className="item-page-buy__controls__price">
                        { price } грн
                    </div>
                    <div className="item-page-buy__controls__button">
                        <div className="button button--red" onClick={ this.onBuyButtonClick }>
                            { isProductInCart ? 'Товар в корзине' : 'Купить' }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onBuyButtonClick() {
        let { id, openCartModal, addCartProduct, cartProductsList } = this.props;

        if(cartProductsList.find(item => item.id === id)) {
            openCartModal();
        } else {
            addCartProduct({
                cartProduct: {
                    id,
                    quantity: 1
                }
            });
            openCartModal();
        }
    }
}

ItemPageBuy.propTypes = {
    id: PropTypes.number,
    price: PropTypes.number,
    addCartProduct: PropTypes.func,
    openCartModal: PropTypes.func
};

export default ItemPageBuy;