import React, { Component } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../../../auth';

interface PrivateRouteProps extends RouteProps{
    component: any,
}

const PrivateRoute = ( {component: Component, ...rest} : PrivateRouteProps ) => (
    <Route { ...rest } render={props => (
        isAuthenticated() ? (
            <Component { ...props } />
        ) : (
            <Redirect to='/login' />
        )
    )} />
)

export default PrivateRoute;