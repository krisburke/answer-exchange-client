import React from 'react';
import { Callout } from '@blueprintjs/core';
import styles from '../SignupPage/SignupPage.module.css';

interface StatusMessageProps {
    isError: boolean;
    message: string;
}

export const StatusMessage = ({ isError, message }: StatusMessageProps) => {
    const intent = isError ? 'danger' : 'success';

    if (!message) {
        return <div />;
    }

    return (
        <div className={styles.message}>
            <Callout intent={intent}>
                <p>{message}</p>
            </Callout>
        </div>
    );
};
