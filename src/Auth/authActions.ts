import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import service from './AuthService';
import {
    LoginDto,
    AuthActionTypes as actions,
    LoginData,
    SignupDto,
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
