import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import galleries from './galleries';
import cart from './cart';
import cities from './cities';
import postOffices from './postOffices';
import soldProducts from './soldProducts';

export default combineReducers({
    form: formReducer,
    products,
    galleries,
    cart,
    cities,
    postOffices,
    soldProducts
});