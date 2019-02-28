import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ItemsPage from '../components/ItemsPage';
import ItemPage from '../components/ItemPage';
import OrderPage from '../components/OrderPage';
import OrderSuccessPage from '../components/OrderSuccessPage';

export default () =>
    <div className="main">
        <Switch>
            <Route exact path="/products/:itemType" component={ ItemsPage } />
            <Route path="/products/:itemType/:id" component={ ItemPage } />
            <Route exact path="/products/:itemType" component={ ItemsPage } />
            <Route path="/products/:itemType/:id" component={ ItemPage } />
            <Route exact path="/products/:itemType" component={ ItemsPage } />
            <Route path="/products/:itemType/:id" component={ ItemPage } />
            <Route path="/order/:cartInfoId" component={ OrderPage } />
            <Route path="/order-success/:orderId" component={ OrderSuccessPage }/>
            <Redirect to="/products/mouse" />
        </Switch>
    </div>