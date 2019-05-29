import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import service from './AuthService';
import { LoginDto, AuthActionTypes as actions, Login } from './authTypes';

export const loginRequest = () => action(actions.LOGIN_REQUEST);

export const loginSuccess = (data: Login) =>
    action(actions.LOGIN_SUCCESS, data);

export const loginFailed = (errorMessage: string) =>
    action(actions.LOGIN_FAILED, errorMessage);

export const login = (loginDto: LoginDto) => (dispatch: Dispatch) => {
    dispatch(loginRequest());
    return service
        .login(loginDto)
        .then(({ data }: AxiosResponse<Login>) => {
            if (!data || !data.accessToken) {
                return dispatch(loginFailed('Error: could not log you in.'));
            }

            dispatch(loginSuccess(data));
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
