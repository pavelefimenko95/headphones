import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'react-modal';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { closeCartModal, deleteCartProduct, updateCartProduct, submitCart } from '../../../actions/cart';
import { loadProducts } from '../../../actions/products';

Modal.setAppElement('#app');

class CartModal extends Component {
    constructor(props) {
        super(props);

        this.submitCart = this.submitCart.bind(this);
    }

    render() {
        let { cart, products, actions } = this.props;

        let extendedCartProductsList = cart.cartProductsList.map(cartProduct => ({
            ...cartProduct,
            ...products.productsList.find(product => product.id === cartProduct.id)
        }));

        let totalPrice = extendedCartProductsList.reduce((prev, next) =>
            (prev.price ? prev.price * prev.quantity : prev) +
            (next.price ? next.price * next.quantity : next)
            , 0);

        return (
            <Fragment>
                <Modal
                    isOpen={ cart.isCartModalOpened }
                    className="cart-modal__content"
                    overlayClassName="cart-modal"
                    contentLabel="Example Modal"
                >
                    <div className="cart-modal__content__header">
                        <div className="cart-modal__content__header__title">
                            Корзина
                        </div>
                        <div className="cart-modal__content__header__close" onClick={ actions.closeCartModal }>
                            <FaTimes size={ 20 } />
                        </div>
                    </div>
                    <div className="cart-modal__content__table">
                        {
                            extendedCartProductsList.length ?
                                extendedCartProductsList.map((product, i) => (
                                    <div key={ i } className="cart-modal__content__table__row">
                                        <div className="cart-modal__content__table__row__image-cell">
                                            <img src={ __INTERNAL_API_URL__ + product.image} alt="" />
                                        </div>
                                        <div className="cart-modal__content__table__row__description-cell">
                                            <div className="cart-modal__content__table__row__description-cell__title">
                                                { product.name }
                                            </div>
                                            <div className="cart-modal__content__table__row__description-cell__description">
                                                { product.description }
                                            </div>
                                        </div>
                                        <div className="cart-modal__content__table__row__quantity-cell">
                                            <FaMinus className="cart-modal__content__table__row__quantity-cell__icon" size={ 20 } onClick={ () => {
                                                if(product.quantity <=1) {
                                                    return false;
                                                }

                                                actions.updateCartProduct({
                                                    cartProduct: {
                                                        id: product.id,
                                                        quantity: product.quantity - 1
                                                    }
                                                })
                                            } } />
                                            <input type="number" max="1" maxLength="1" value={ product.quantity } onChange={ e => {
                                                if(e.target.value > 9 || e.target.value < 0)
                                                    return false;

                                                actions.updateCartProduct({
                                                    cartProduct: {
                                                        id: product.id,
                                                        quantity: e.target.value
                                                    }
                                                })
                                            } } />
                                            <FaPlus className="cart-modal__content__table__row__quantity-cell__icon" size={ 20 } onClick={ () => {
                                                if(product.quantity >= 9) {
                                                    return false;
                                                }

                                                actions.updateCartProduct({
                                                    cartProduct: {
                                                        id: product.id,
                                                        quantity: product.quantity + 1
                                                    }
                                                })
                                            } } />
                                        </div>
                                        <div className="cart-modal__content__table__row__price-cell">
                                            { product.price * product.quantity } грн
                                        </div>
                                        <div className="cart-modal__content__table__row__delete" onClick={ () => actions.deleteCartProduct({ id: product.id }) }>
                                            <FaTimes size={ 20 } />
                                        </div>
                                    </div>
                                )) : <div className="cart-modal__content__table__row cart-modal__content__table__row--empty">Товары не выбраны</div>
                        }
                    </div>
                    <div className={ classNames('cart-modal__content__footer', {'hidden': !cart.cartProductsList.length}) }>
                        <div className="cart-modal__content__footer__total-price">
                            Всего: &nbsp;
                            { totalPrice }
                            грн
                        </div>
                        <div className="cart-modal__content__footer__continue">
                            <div className="button" onClick={ actions.closeCartModal }>
                                Продолжить покупки
                            </div>
                        </div>
                        <div className="cart-modal__content__footer__submit">
                            <div className="button button--red" onClick={ () => this.submitCart(totalPrice) }>
                                Оформить заказ
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }

    componentDidMount() {
        this.props.actions.loadProducts();
    }

    submitCart(totalPrice) {
        let { cart, actions, history } = this.props;

        actions.submitCart({
            cartProductsList: cart.cartProductsList,
            totalPrice
        }, history.push);
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        closeCartModal,
        loadProducts,
        deleteCartProduct,
        updateCartProduct,
        submitCart
    }, dispatch)
});

CartModal.propTypes = {
    cart: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartModal));

