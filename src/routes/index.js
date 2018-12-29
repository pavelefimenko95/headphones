import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemsPage from '../components/ItemsPage';
import * as pagesConstants from '../constants/pages';

export default () =>
    <div className="main">
        <Switch>
            <Route path={`${ pagesConstants.MOUSE_PAGE_ROUTE }`} component={ ItemsPage } />
        </Switch>
    </div>