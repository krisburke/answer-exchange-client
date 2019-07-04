import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon, Navbar as BPNavbar } from '@blueprintjs/core';

const StyledLink = styled(NavLink)`
    text-decoration: inherit;
    color: inherit;

    :hover {
        text-decoration: inherit;
        color: inherit;
    }
`;

const HomeIcon = styled(Icon)`
    padding: 0 10px;
`;

const HomeHeading = styled(BPNavbar.Heading)`
    display: inline-block;
`;

export const AppHomeLogo = () => {
    return (
        <StyledLink to="/">
            <HomeIcon icon={'layers'} iconSize={20} />
            <HomeHeading>
                Answer <strong>Exchange</strong>
            </HomeHeading>
        </StyledLink>
    );
};
