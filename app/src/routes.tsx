import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './components/Private/PrivateRoute';

// Pages

import Login from './pages/Login';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/" component={() => <h1>Home</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes; 