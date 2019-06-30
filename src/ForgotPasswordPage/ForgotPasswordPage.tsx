import React from 'react';
import styled from 'styled-components';
import { Card, Elevation, Spinner } from '@blueprintjs/core';
import { ForgotPasswordPageProps } from './ForgotPasswordContainer';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { StatusMessage } from '../Common/components/StatusMessage';

const StyledForgotPasswordPage = styled.div`
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

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
    auth,
    submitForgotPassword,
}) => {
    const { isLoading, isError, statusMessage } = auth;

    if (isLoading) {
        return (
            <StyledForgotPasswordPage>
                <Spinner />
            </StyledForgotPasswordPage>
        );
    }

    return (
        <StyledForgotPasswordPage>
            <Card elevation={Elevation.ONE}>
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
            </Card>
        </StyledForgotPasswordPage>
    );
};
