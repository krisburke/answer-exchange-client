export interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    isSignedUp: boolean;
    userUuid: string;
    accessToken: string | null;
    isError: boolean;
    statusMessage: string;
}

export enum AuthActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILED = 'LOGIN_FAILED',
    LOGOUT = 'LOGOUT',
    SIGNUP_REQUEST = 'SIGNUP_REQUEST',
    SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
    SIGNUP_FAILED = 'SIGNUP_FAILED',
    FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
    FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
    FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED',
    RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST',
    RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
    RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED',
}

export interface LoginDto {
    email: string;
    password: string;
}

export interface LoginData {
    accessToken: string;
    userUuid: string;
    expiresIn: string;
}

export interface SignupDto {
    email: string;
    username: string;
    displayName?: string;
    password: string;
}

export interface ForgotPasswordDto {
    email: string;
}

export interface ResetPasswordDto {
    email: string;
    password: string;
    token: string;
}
