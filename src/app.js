import React, { Component, Fragment } from 'react';
import Navbar from './components/common/Navbar';
import IndexRouter from './routes';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <IndexRouter />
            </Fragment>
        );
    }
}