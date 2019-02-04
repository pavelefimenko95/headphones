import * as cartActionConstants from '../constants/actions/cart';

const initialState = {
    cartProductsList: [],
    isCartModalOpened: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case cartActionConstants.ADD_CART_PRODUCT:
            return {
                ...state,
                cartProductsList: [...state.cartProductsList, action.data.cartProduct]
            };
        case cartActionConstants.DELETE_CART_PRODUCT:
            return {
                ...state,
                cartProductsList: state.cartProductsList.filter(product => product.id !== action.data.id)
            };
        case cartActionConstants.UPDATE_CART_PRODUCT:
            return {
                ...state,
                cartProductsList: state.cartProductsList.map(product => product.id === action.data.cartProduct.id ? action.data.cartProduct : product)
            };
        case cartActionConstants.OPEN_CART_MODAL:
            return {
                ...state,
                isCartModalOpened: true
            };
        case cartActionConstants.CLOSE_CART_MODAL:
            return {
                ...state,
                isCartModalOpened: false
            };
        case cartActionConstants.SUBMIT_CART:
            return initialState;
        default:
            return state;
    }
};