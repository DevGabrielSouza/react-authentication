import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Pages

import Login from './pages/Login';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={() => <h1>Home</h1>} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    )
}

export default Routes; 