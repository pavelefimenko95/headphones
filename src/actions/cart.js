import axios from 'axios';
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

export const submitCart = (data, push) => async dispatch => {
    try {
        let response = await axios.post('/database/create/cart-info', data);
        dispatch({
            type: cartActionConstants.SUBMIT_CART
        });

        push(`/order/${ response.data.cartInfoId }`);
    } catch(e) {
        console.log(e);
    }
};