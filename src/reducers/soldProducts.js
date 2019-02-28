import * as soldProductsActionConstants from '../constants/actions/soldProducts';

const initialState = {
    isRequestPending: false,
    soldProductsList: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case soldProductsActionConstants.SOLD_PRODUCTS_REQUEST_PENDING:
            return {
                ...state,
                isRequestPending: true
            };
        case soldProductsActionConstants.SOLD_PRODUCTS_REQUEST_FULFILLED:
            return {
                ...state,
                isRequestPending: false
            };
        case soldProductsActionConstants.LOAD_SOLD_PRODUCTS:
            return {
                ...state,
                soldProductsList: action.data.soldProductsList
            };
        default:
            return state;
    }
};