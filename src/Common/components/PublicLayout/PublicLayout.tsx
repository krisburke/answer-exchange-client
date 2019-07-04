import React from 'react';
import styled from 'styled-components';
import { PublicNavbar } from './PublicNavbar';

const PageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    min-height: 100vh;
    background-color: #f6f8fa;
`;

interface Props {
    children: React.ReactNode;
}

export const PublicLayout: React.FC<Props> = props => (
    <div>
        <PublicNavbar />
        <PageContent>{props.children}</PageContent>
    </div>
);
