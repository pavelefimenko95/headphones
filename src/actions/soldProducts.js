import axios from 'axios';
import * as soldProductsActionConstants from '../constants/actions/soldProducts';

export const loadSoldProducts = ({ cartInfoId }) => async dispatch => {
    try {
        dispatch({
            type: soldProductsActionConstants.SOLD_PRODUCTS_REQUEST_PENDING
        });

        let { data } = await axios.get(`/database/load/sold-products?cartInfoId=${ cartInfoId }`);

        dispatch({
            type: soldProductsActionConstants.LOAD_SOLD_PRODUCTS,
            data
        });
        dispatch({
            type: soldProductsActionConstants.SOLD_PRODUCTS_REQUEST_FULFILLED
        });
    } catch (e) {
        console.log(e);
        dispatch({
            type: soldProductsActionConstants.SOLD_PRODUCTS_REQUEST_FULFILLED
        });
    }
};