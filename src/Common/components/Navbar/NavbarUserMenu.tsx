import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

interface Props {
    logout: any; // todo
}

export const NavbarUserMenu = ({ logout }: Props) => {
    return (
        <>
            <Menu>
                <MenuItem text="Logout" onClick={logout} href="/login" />
            </Menu>
        </>
    );
};
