import React from 'react';
import {
    Navbar,
    Alignment,
    Button,
    Popover,
    IPopoverProps,
    Position,
} from '@blueprintjs/core';
import * as actions from '../../../Auth/authActions';
import { AppNavbarUserMenu } from './AppNavbarUserMenu';
import { AppHomeLogo } from '../AppHomeLogo';

interface Props {
    logout: typeof actions.logout;
}

export const AppNavbar = ({ logout }: Props) => {
    const userMenuProps: IPopoverProps = {
        content: <AppNavbarUserMenu logout={logout} />,
        position: Position.BOTTOM,
    };

    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <AppHomeLogo />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Popover {...userMenuProps}>
                    <Button className="bp3-minimal" icon="user" />
                </Popover>
                <Button className="bp3-minimal" icon="cog" />
            </Navbar.Group>
        </Navbar>
    );
};
