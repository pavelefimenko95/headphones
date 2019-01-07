import React, { Component, Fragment } from 'react';
import Header from './components/common/Header';
import IndexRouter from './routes';
import axios from "axios";

axios.defaults.baseURL = __INTERNAL_API_URL__;

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <IndexRouter />
            </Fragment>
        );
    }
}