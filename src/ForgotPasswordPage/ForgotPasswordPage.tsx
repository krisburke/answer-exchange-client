import React from 'react';
import styled from 'styled-components';
import { Elevation, Spinner } from '@blueprintjs/core';
import { ForgotPasswordPageProps } from './ForgotPasswordContainer';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { StatusMessage } from '../Common/components/StatusMessage';
import { PublicLayout } from '../Common/components/PublicLayout/PublicLayout';
import { AuthFormCard } from '../Common/components/PublicLayout/AuthFormCard';

const LinkText = styled.p`
    margin: 10px 0;
`;

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
    auth,
    submitForgotPassword,
}) => {
    const { isLoading, isError, statusMessage } = auth;

    if (isLoading) {
        return (
            <PublicLayout>
                <Spinner />
            </PublicLayout>
        );
    }

    return (
        <PublicLayout>
            <AuthFormCard elevation={Elevation.ONE}>
                <h1>Forgot your password?</h1>
                <h4>
                    Enter your email address, and if it exists you will receive
                    a link to reset your password.
                </h4>
                <ForgotPasswordForm
                    submitForgotPassword={submitForgotPassword}
                />
                <StatusMessage isError={isError} message={statusMessage} />
                <LinkText>
                    <a href={'/login'}>Return to login.</a>
                </LinkText>
            </AuthFormCard>
        </PublicLayout>
    );
};
