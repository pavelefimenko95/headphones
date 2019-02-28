import axios from 'axios';
import * as productsActionConstants from '../constants/actions/products';

export const loadProducts = () => dispatch => {
    dispatch({
        type: productsActionConstants.PRODUCTS_REQUEST_PENDING
    });

    axios.get('/database/load/products').then(response => {
        dispatch({
            type: productsActionConstants.LOAD_PRODUCTS,
            data: response.data
        });
        dispatch({
            type: productsActionConstants.PRODUCTS_REQUEST_FULFILLED
        });
    }).catch(err => {
        console.error(err);

        dispatch({
            type: productsActionConstants.PRODUCTS_REQUEST_FULFILLED
        });
    });
};