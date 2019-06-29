import React, { ReactNode } from 'react';
import * as authActions from '../Auth/authActions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MainLayout } from './MainLayout';

interface PropsFromDispatch {
    logout: typeof authActions.logout;
}

interface ComponentProps {
    children: ReactNode;
}

export type Props = PropsFromDispatch & ComponentProps;

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    logout: () => dispatch(authActions.logout()),
});

export default connect<{}, PropsFromDispatch>(
    null,
    mapDispatchToProps,
)(MainLayout);
