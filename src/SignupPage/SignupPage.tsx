import React, { Component } from 'react';
import { Card, Elevation, Spinner } from '@blueprintjs/core';
import { SignupPageProps } from './SignupPageContainer';
import styles from './SignupPage.module.css';
import { SignupForm } from './SignupForm';
import { StatusMessage } from '../Common/components/StatusMessage';
import { Redirect } from 'react-router';

export default class SignupPage extends Component<SignupPageProps> {
    render() {
        const {
            auth: { statusMessage, isError, isLoading, isSignedUp },
        } = this.props;

        if (isLoading) {
            return (
                <div className={styles.page}>
                    <Spinner />
                </div>
            );
        }

        if (isSignedUp) {
            return <Redirect to="/login" />;
        }

        return (
            <div className={styles.page}>
                <Card elevation={Elevation.ONE}>
                    <h1>Sign up for an account.</h1>
                    <SignupForm {...this.props} />
                    <StatusMessage isError={isError} message={statusMessage} />
                    <p className={styles.linkText}>
                        Already have an account? <a href={'/login'}>Sign in.</a>
                    </p>
                </Card>
            </div>
        );
    }
}
