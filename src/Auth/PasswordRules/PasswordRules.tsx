import React from 'react';
import styled from 'styled-components';

const StyledPasswordRules = styled.div`
    font-size: 0.9em;
    margin-top: 22px;
`;

const Paragraph = styled.p`
    margin-left: 25px;
`;

const List = styled.ul`
    margin-top: 5px;
`;

export const PasswordRules = () => {
    return (
        <StyledPasswordRules>
            <Paragraph>Passwords should</Paragraph>
            <List>
                <li>Be at least 8 characters long</li>
                <li>Contain a lowercase letter</li>
                <li>Contain a uppercase letter</li>
                <li>Contain a number</li>
                <li>Contain a symbol</li>
            </List>
        </StyledPasswordRules>
    );
};
