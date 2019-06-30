import React from 'react';
import { ResetPasswordPageProps } from './ResetPasswordContainer';
import styled from 'styled-components';
import { Card, Elevation, Spinner } from '@blueprintjs/core';
import { ResetPasswordForm } from './ResetPasswordForm';
import { StatusMessage } from '../Common/components/StatusMessage';

const StyledResetPasswordPage = styled.div`
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

export const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({
    location,
    auth,
    resetPassword,
}) => {
    const { isLoading, isError, statusMessage } = auth;

    if (isLoading) {
        return (
            <StyledResetPasswordPage>
                <Spinner />
            </StyledResetPasswordPage>
        );
    }

    return (
        <StyledResetPasswordPage>
            <Card elevation={Elevation.ONE}>
                <h1>Reset your password.</h1>
                <h4>Please enter a new password.</h4>
                <ResetPasswordForm
                    resetPassword={resetPassword}
                    location={location}
                />
                <StatusMessage isError={isError} message={statusMessage} />
                <LinkText>
                    <a href={'/login'}>Return to login.</a>
                </LinkText>
            </Card>
        </StyledResetPasswordPage>
    );
};
