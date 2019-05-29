export interface LoginDto {
    email: string;
    password: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    accessToken: string | null;
    isError: boolean;
    statusMessage: string;
}

export interface Login {
    accessToken: string;
}

export enum AuthActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILED = 'LOGIN_FAILED',
    LOGOUT = 'LOGOUT',
}
