import React, { Component, Fragment } from 'react';
import Header from './components/common/Header';
import IndexRouter from './routes';

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