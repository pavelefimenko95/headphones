import * as cartActionConstants from '../constants/actions/cart';

export const addCartProduct = data => dispatch => {
    dispatch({
        type: cartActionConstants.ADD_CART_PRODUCT,
        data
    });
};

export const deleteCartProduct = data => dispatch => {
    dispatch({
        type: cartActionConstants.DELETE_CART_PRODUCT,
        data
    });
};

export const updateCartProduct = data => dispatch => {
    dispatch({
        type: cartActionConstants.UPDATE_CART_PRODUCT,
        data
    });
};

export const openCartModal = () => dispatch => {
    dispatch({
        type: cartActionConstants.OPEN_CART_MODAL
    });
};

export const closeCartModal = () => dispatch => {
    dispatch({
        type: cartActionConstants.CLOSE_CART_MODAL
    });
};