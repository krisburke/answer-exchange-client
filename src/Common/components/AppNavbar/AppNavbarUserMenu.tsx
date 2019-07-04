import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import * as actions from '../../../Auth/authActions';

interface Props {
    logout: typeof actions.logout;
}

export const AppNavbarUserMenu = ({ logout }: Props) => {
    return (
        <Menu>
            <MenuItem text="Logout" onClick={logout} href="/login" />
        </Menu>
    );
};
