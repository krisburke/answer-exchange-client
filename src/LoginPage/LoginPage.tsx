import React from 'react';
import { Card, Elevation, Spinner } from '@blueprintjs/core';
import { LoginPageProps } from './LoginPageContainer';
import { LoginForm } from './LoginForm/LoginForm';
import styles from './LoginPage.module.css';
import { StatusMessage } from '../Common/components/StatusMessage';
import { Redirect } from 'react-router';

export const LoginPage = ({ auth, login }: LoginPageProps) => {
    const { isError, statusMessage, isLoading, isAuthenticated } = auth;

    if (isLoading) {
        return (
            <div className={styles.page}>
                <Spinner />
            </div>
        );
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className={styles.page}>
            <Card elevation={Elevation.ONE}>
                <h1>Sign in to your account.</h1>
                <h3>Enter your details below.</h3>
                <LoginForm login={login} />
                <StatusMessage isError={isError} message={statusMessage} />
                <p className={styles.linkText}>
                    <a href={'/reset-password'}>Forgot password?</a>
                </p>
                <p className={styles.linkText}>
                    Don't have an account? <a href={'/signup'}>Sign up.</a>
                </p>
            </Card>
        </div>
    );
};
