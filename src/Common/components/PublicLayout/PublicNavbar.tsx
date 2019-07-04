import React from 'react';
import { Alignment, Navbar } from '@blueprintjs/core';
import { AppHomeLogo } from '../AppHomeLogo';

export const PublicNavbar = () => {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <AppHomeLogo />
            </Navbar.Group>
        </Navbar>
    );
};
