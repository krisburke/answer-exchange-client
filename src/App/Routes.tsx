import React from 'react';
import { Route, Switch } from 'react-router';
import HomePageContainer from '../HomePage/HomePageContainer';

// TODO private routes
export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route
                key="home"
                path="/"
                exact={true}
                component={HomePageContainer}
            />
        </Switch>
    );
};
