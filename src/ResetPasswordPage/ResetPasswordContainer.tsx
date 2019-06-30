import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';
import { AuthState, ResetPasswordDto } from '../Auth/authTypes';
import { ApplicationState } from '../Common/redux/reducer';
import { ResetPasswordPage } from './ResetPasswordPage';
import * as actions from '../Auth/authActions';

interface PropsFromState {
    auth: AuthState;
}

interface PropsFromDispatch {
    resetPassword: typeof actions.resetPassword;
}

export type ResetPasswordPageProps = PropsFromState &
    PropsFromDispatch &
    RouteProps;

const mapStateToProps = ({ auth }: ApplicationState): PropsFromState => ({
    auth,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    resetPassword: (resetPasswordDto: ResetPasswordDto) =>
        dispatch(actions.resetPassword(resetPasswordDto)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ResetPasswordPage);
