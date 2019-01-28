import { combineReducers } from 'redux';
import products from './products';
import galleries from './galleries';

export default combineReducers({
    products,
    galleries
});