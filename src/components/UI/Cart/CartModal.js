import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { closeCartModal } from '../../../actions/cart';
import { loadProducts } from '../../../actions/products';

Modal.setAppElement('#app');

class CartModal extends Component {
    render() {
        let { cart, products, actions } = this.props;

        let extendedCartProductsList = cart.cartProductsList.map(cartProduct => ({
            ...cartProduct,
            ...products.productsList.find(product => product.id === cartProduct.id)
        }));

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
                        <div className="cart-modal__content__header__close">
                            <button onClick={ actions.closeCartModal }>close</button>
                        </div>
                    </div>
                    <div className="cart-modal__content__table">
                        {
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
                                        quanity { product.quantity }
                                    </div>
                                    <div className="cart-modal__content__table__row__price-cell">
                                        { product.price * product.quantity }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Modal>
            </Fragment>
        );
    }

    componendividMount() {
        this.props.actions.loadProducts();
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        closeCartModal,
        loadProducts
    }, dispatch)
});

CartModal.propTypes = {
    cart: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);

