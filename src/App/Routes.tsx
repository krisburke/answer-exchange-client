import React from 'react';
import { Route, Switch } from 'react-router';
import HomePageContainer from '../HomePage/HomePageContainer';
import QuestionPageContainer from '../QuestionPage/QuestionPageContainer';
import AskQuestionPageContainer from '../AskQuestionPage/AskQuestionPageContainer';
import LoginPageContainer from '../LoginPage/LoginPageContainer';
import SignupPageContainer from '../SignupPage/SignupPageContainer';
import ForgotPasswordContainer from '../ForgotPasswordPage/ForgotPasswordContainer';
import ResetPasswordContainer from '../ResetPasswordPage/ResetPasswordContainer';

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
            <Route
                key="signup"
                path="/signup"
                exact={true}
                component={SignupPageContainer}
            />
            <Route
                key="forgot-password"
                path="/forgot-password"
                exact={true}
                component={ForgotPasswordContainer}
            />
            <Route
                key="reset-password"
                path="/reset-password"
                exact={true}
                component={ResetPasswordContainer}
            />
        </Switch>
    );
};
