import React from 'react';
import { AppNavbar } from '../Common/components/AppNavbar/AppNavbar';
import { Props } from './MainContainer';

export const MainLayout = (props: Props) => {
    console.log(props);
    return (
        <div>
            <AppNavbar {...props} />
            {props.children}
        </div>
    );
};
