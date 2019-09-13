import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { Elevation, Spinner } from '@blueprintjs/core';
import { SignupPageProps } from './SignupPageContainer';
import { SignupForm } from './SignupForm';
import { StatusMessage } from '../Common/components/StatusMessage';
import { PublicLayout } from '../Common/components/PublicLayout/PublicLayout';
import { AuthFormCard } from '../Common/components/PublicLayout/AuthFormCard';

const LinkText = styled.p`
    margin: 10px 0;
`;

export default function SignupPage(props: SignupPageProps) {
    const {
        auth: { statusMessage, isError, isLoading, isSignedUp },
    } = props;

    if (isLoading) {
        return (
            <PublicLayout>
                <Spinner />
            </PublicLayout>
        );
    }

    if (isSignedUp) {
        return <Redirect to="/login" />;
    }

    return (
        <PublicLayout>
            <AuthFormCard elevation={Elevation.ONE}>
                <h1>Sign up for an account.</h1>
                <SignupForm {...props} />
                <StatusMessage isError={isError} message={statusMessage} />
                <LinkText>
                    Already have an account? <a href={'/login'}>Sign in.</a>
                </LinkText>
            </AuthFormCard>
        </PublicLayout>
    );
}
