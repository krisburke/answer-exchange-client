import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { Card, Elevation, Spinner } from '@blueprintjs/core';
import { LoginPageProps } from './LoginPageContainer';
import { LoginForm } from './LoginForm';
import { StatusMessage } from '../Common/components/StatusMessage';

const StyledLoginPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    min-height: 100vh;
    background-color: #f6f8fa;
`;

const LinkText = styled.p`
    margin: 10px 0;
`;

export const LoginPage = ({ auth, login }: LoginPageProps) => {
    const { isError, statusMessage, isLoading, isAuthenticated } = auth;

    if (isLoading) {
        return (
            <StyledLoginPage>
                <Spinner />
            </StyledLoginPage>
        );
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <StyledLoginPage>
            <Card elevation={Elevation.ONE}>
                <h1>Sign in to your account.</h1>
                <h3>Enter your details below.</h3>
                <LoginForm login={login} />
                <StatusMessage isError={isError} message={statusMessage} />
                <LinkText>
                    <a href={'/reset-password'}>Forgot password?</a>
                </LinkText>
                <LinkText>
                    Don't have an account? <a href={'/signup'}>Sign up.</a>
                </LinkText>
            </Card>
        </StyledLoginPage>
    );
};
