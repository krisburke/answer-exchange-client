import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AuthState, ForgotPasswordDto } from '../Auth/authTypes';
import { ApplicationState } from '../Common/redux/reducer';
import { ForgotPasswordPage } from './ForgotPasswordPage';
import * as actions from '../Auth/authActions';

interface PropsFromState {
    auth: AuthState;
}

interface PropsFromDispatch {
    submitForgotPassword: typeof actions.submitForgotPassword;
}

export type ForgotPasswordPageProps = PropsFromState & PropsFromDispatch;

const mapStateToProps = ({ auth }: ApplicationState): PropsFromState => ({
    auth,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    submitForgotPassword: (forgotPasswordDto: ForgotPasswordDto) =>
        dispatch(actions.submitForgotPassword(forgotPasswordDto)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ForgotPasswordPage);
