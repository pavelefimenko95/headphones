import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemsPage from '../components/ItemsPage';
import ItemPage from '../components/ItemPage';

export default () =>
    <div className="main">
        <Switch>
            <Route exact path="/products/:itemType" component={ ItemsPage } />
            <Route path="/products/:itemType/:id" component={ ItemPage } />
            <Route exact path="/products/:itemType" component={ ItemsPage } />
            <Route path="/products/:itemType/:id" component={ ItemPage } />
            <Route exact path="/products/:itemType" component={ ItemsPage } />
            <Route path="/products/:itemType/:id" component={ ItemPage } />
        </Switch>
    </div>