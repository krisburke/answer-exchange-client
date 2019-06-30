import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import service from './AuthService';
import {
    LoginDto,
    AuthActionTypes as actions,
    LoginData,
    SignupDto,
    ForgotPasswordDto,
    ResetPasswordDto,
} from './authTypes';
import { User } from '../Question/questionTypes';

export const loginRequest = () => action(actions.LOGIN_REQUEST);

export const loginSuccess = (data: LoginData) =>
    action(actions.LOGIN_SUCCESS, data);

export const loginFailed = (errorMessage: string) =>
    action(actions.LOGIN_FAILED, errorMessage);

export const login = (loginDto: LoginDto) => (dispatch: Dispatch) => {
    dispatch(loginRequest());
    return service
        .login(loginDto)
        .then(({ data }: AxiosResponse<LoginData>) => {
            if (!data || !data.accessToken) {
                return dispatch(loginFailed('Error: could not log you in.'));
            }
            dispatch(loginSuccess(data));
            // FIXME: use of localstorage is temporary in dev
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('userUuid', data.userUuid);
        })
        .catch((error: AxiosError) =>
            dispatch(loginFailed('Incorrect email or password.')),
        );
};

export const logoutSuccess = () => action(actions.LOGOUT);

export const logout = () => (dispatch: Dispatch) => {
    // todo handle cookies / redirect
    dispatch(logoutSuccess());
};

export const signupRequest = () => action(actions.SIGNUP_REQUEST);
export const signupSuccess = (signupData: User) =>
    action(actions.SIGNUP_SUCCESS, signupData);
export const signupFailed = (errorMessage: string) =>
    action(actions.SIGNUP_FAILED, errorMessage);

export const signup = (signupDto: SignupDto) => (dispatch: Dispatch) => {
    dispatch(signupRequest());
    return service
        .register(signupDto)
        .then(({ data }: AxiosResponse<User>) => {
            dispatch(signupSuccess(data));
        })
        .catch((error: AxiosError) => {
            const errorMessage =
                (error && error.message) || 'Error signing up.';
            dispatch(signupFailed(errorMessage));
        });
};

export const forgotPasswordRequest = () =>
    action(actions.FORGOT_PASSWORD_REQUEST);

export const forgotPasswordSuccess = (successMessage: string) =>
    action(actions.FORGOT_PASSWORD_SUCCESS, successMessage);

export const forgotPasswordFailure = (errorMessage: string) =>
    action(actions.FORGOT_PASSWORD_FAILED, errorMessage);

export const submitForgotPassword = (forgotPasswordDto: ForgotPasswordDto) => (
    dispatch: Dispatch<any>,
) => {
    const successMessage = `A password reminder was sent to ${
        forgotPasswordDto.email
    } if an 
    account registered to that email address exists. If you do not see the email, 
    please check your spam folder.`;
    const errorMessage = `An error occurred while processing your request.`;

    dispatch(forgotPasswordRequest());
    return service
        .submitForgotPassword(forgotPasswordDto)
        .then(() => dispatch(forgotPasswordSuccess(successMessage)))
        .catch(() => dispatch(forgotPasswordFailure(errorMessage)));
};

export const resetPasswordRequest = () =>
    action(actions.RESET_PASSWORD_REQUEST);

export const resetPasswordSuccess = (successMessage: string) =>
    action(actions.RESET_PASSWORD_SUCCESS, successMessage);

export const resetPasswordFailure = (errorMessage: string) =>
    action(actions.RESET_PASSWORD_FAILED, errorMessage);

export const resetPassword = (resetPasswordDto: ResetPasswordDto) => (
    dispatch: Dispatch<any>,
) => {
    const successMessage = `Your password has been reset! Please login with your new password.`;
    const errorMessage = `An error occurred while processing your request.`;

    dispatch(resetPasswordRequest());
    return service
        .resetPassword(resetPasswordDto)
        .then(() => dispatch(resetPasswordSuccess(successMessage)))
        .catch(() => dispatch(resetPasswordFailure(errorMessage)));
};
