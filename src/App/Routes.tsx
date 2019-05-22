import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage } from '../HomePage/HomePage';

// TODO private routes
export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route key="home" path="/" exact={true} component={HomePage} />
        </Switch>
    );
};
