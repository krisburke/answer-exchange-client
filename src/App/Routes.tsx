import React from 'react';
import { Route, Switch } from 'react-router';
import HomePageContainer from '../HomePage/HomePageContainer';
import QuestionPageContainer from '../QuestionPage/QuestionPageContainer';

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
            <Route
                key="question"
                path="/question/:uuid"
                exact={true}
                component={QuestionPageContainer}
            />
        </Switch>
    );
};
