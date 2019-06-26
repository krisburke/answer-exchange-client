import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { Card, Elevation, Spinner } from '@blueprintjs/core';
import { SignupPageProps } from './SignupPageContainer';
import { SignupForm } from './SignupForm';
import { StatusMessage } from '../Common/components/StatusMessage';

const StyledSignupPage = styled.div`
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

export default class SignupPage extends Component<SignupPageProps> {
    render() {
        const {
            auth: { statusMessage, isError, isLoading, isSignedUp },
        } = this.props;

        if (isLoading) {
            return (
                <StyledSignupPage>
                    <Spinner />
                </StyledSignupPage>
            );
        }

        if (isSignedUp) {
            return <Redirect to="/login" />;
        }

        return (
            <StyledSignupPage>
                <Card elevation={Elevation.ONE}>
                    <h1>Sign up for an account.</h1>
                    <SignupForm {...this.props} />
                    <StatusMessage isError={isError} message={statusMessage} />
                    <LinkText>
                        Already have an account? <a href={'/login'}>Sign in.</a>
                    </LinkText>
                </Card>
            </StyledSignupPage>
        );
    }
}
