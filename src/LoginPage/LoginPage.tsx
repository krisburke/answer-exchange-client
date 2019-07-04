import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { Elevation, Spinner } from '@blueprintjs/core';
import { LoginPageProps } from './LoginPageContainer';
import { LoginForm } from './LoginForm';
import { StatusMessage } from '../Common/components/StatusMessage';
import { PublicLayout } from '../Common/components/PublicLayout/PublicLayout';
import { AuthFormCard } from '../Common/components/PublicLayout/AuthFormCard';

const LinkText = styled.p`
    margin: 10px 0;
`;

export const LoginPage = ({ auth, login }: LoginPageProps) => {
    const { isError, statusMessage, isLoading, isAuthenticated } = auth;

    if (isLoading) {
        return (
            <PublicLayout>
                <Spinner />
            </PublicLayout>
        );
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <PublicLayout>
            <AuthFormCard elevation={Elevation.ONE}>
                <h1>Sign in to your account.</h1>
                <h3>Enter your details below.</h3>
                <LoginForm login={login} />
                <StatusMessage isError={isError} message={statusMessage} />
                <LinkText>
                    <a href={'/forgot-password'}>Forgot password?</a>
                </LinkText>
                <LinkText>
                    Don't have an account? <a href={'/signup'}>Sign up.</a>
                </LinkText>
            </AuthFormCard>
        </PublicLayout>
    );
};
