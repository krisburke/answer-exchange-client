import React from 'react';
import { Callout } from '@blueprintjs/core';

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
        <div>
            <Callout intent={intent}>
                <p>{message}</p>
            </Callout>
        </div>
    );
};
