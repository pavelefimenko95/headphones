import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

export default () =>
    <div className="main">
        <Switch>
            <Route exact path="/" component={ HomePage } />
        </Switch>
    </div>