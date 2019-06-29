import React from 'react';
import {
    Navbar as BPNavbar,
    Alignment,
    Button,
    Icon,
    Popover,
    IPopoverProps,
    Position,
} from '@blueprintjs/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { NavbarUserMenu } from './NavbarUserMenu';
import * as actions from '../../../Auth/authActions';

interface Props {
    logout: typeof actions.logout;
}

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

export const Navbar = ({ logout }: Props) => {
    const userMenuProps: IPopoverProps = {
        content: <div />,
        // content: <NavbarUserMenu logout={logout} />,
        position: Position.BOTTOM,
    };

    return (
        <BPNavbar>
            <BPNavbar.Group align={Alignment.LEFT}>
                <StyledLink to="/">
                    <HomeIcon icon={'layers'} iconSize={20} />
                    <HomeHeading>
                        Answer <strong>Exchange</strong>
                    </HomeHeading>
                </StyledLink>
            </BPNavbar.Group>
            <BPNavbar.Group align={Alignment.RIGHT}>
                <Popover {...userMenuProps}>
                    <Button className="bp3-minimal" icon="user" />
                </Popover>
                <Button className="bp3-minimal" icon="cog" />
            </BPNavbar.Group>
        </BPNavbar>
    );
};
