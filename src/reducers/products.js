import * as productsActionConstants from '../constants/actions/products';

const initialState = {
    isRequestPending: false,
    productsList: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case productsActionConstants.PRODUCTS_REQUEST_PENDING:
            return {
                ...state,
                isRequestPending: true
            };
        case productsActionConstants.PRODUCTS_REQUEST_FULFILLED:
            return {
                ...state,
                isRequestPending: false
            };
        case productsActionConstants.LOAD_PRODUCTS:
            return {
                ...state,
                productsList: action.data.products
            };
        default:
            return state;
    }
};