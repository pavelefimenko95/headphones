import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from './components/common/Header';
import IndexRouter from './routes';
import CartControls from './components/UI/Cart/CartControls';
import CartModal from './components/UI/Cart/CartModal';

axios.defaults.baseURL = __INTERNAL_API_URL__;

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <CartControls />
                <CartModal />
                <Header />
                <IndexRouter />
            </Fragment>
        );
    }
}