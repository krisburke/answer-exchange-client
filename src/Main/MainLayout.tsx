import React from 'react';
import { Navbar } from '../Common/components/Navbar/Navbar';
import { Props } from './MainContainer';

export const MainLayout = (props: Props) => {
    console.log(props);
    return (
        <div>
            <Navbar {...props} />
            {props.children}
        </div>
    );
};
