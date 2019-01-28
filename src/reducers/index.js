import { combineReducers } from 'redux';
import products from './products';
import galleries from './galleries';
import cart from './cart';

export default combineReducers({
    products,
    galleries,
    cart
});