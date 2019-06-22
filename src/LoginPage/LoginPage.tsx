import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { LoginPageProps } from './LoginPageContainer';
import { LoginForm } from './LoginForm/LoginForm';
import styles from './LoginPage.module.css';

export const LoginPage = (props: LoginPageProps) => {
    return (
        <div className={styles.page}>
            <Card elevation={Elevation.ONE}>
                <h1>Sign in to your account.</h1>
                <h3>Enter your details below.</h3>
                <LoginForm {...props} />
                <p className={styles.linkText}>
                    <a href={'/reset-password'}>Forgot password?</a>
                </p>
                <p className={styles.linkText}>
                    Don't have an account? <a href={'/'}>Sign up.</a>
                </p>
            </Card>
        </div>
    );
};
