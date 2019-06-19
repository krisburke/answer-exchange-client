import React from 'react';
import { LoginPageProps } from './LoginPageContainer';
import { LoginForm } from './LoginForm';

export const LoginPage = (props: LoginPageProps) => {
    return (
        <div>
            <h1>Hey, good to see you again!</h1>
            <h3>Login to get started.</h3>
            <LoginForm {...props} />
        </div>
    );
};
