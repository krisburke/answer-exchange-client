import React from 'react';
import { Route, Switch } from 'react-router';
import HomePageContainer from '../HomePage/HomePageContainer';
import QuestionPageContainer from '../QuestionPage/QuestionPageContainer';
import AskQuestionPageContainer from '../AskQuestionPage/AskQuestionPageContainer';
import LoginPageContainer from '../LoginPage/LoginPageContainer';

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
            <Route
                key="ask"
                path="/ask"
                exact={true}
                component={AskQuestionPageContainer}
            />
            <Route
                key="login"
                path="/login"
                exact={true}
                component={LoginPageContainer}
            />
        </Switch>
    );
};
