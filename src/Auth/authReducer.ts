import { AuthActionTypes as actions, AuthState } from './authTypes';

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    isSignedUp: false,
    accessToken: localStorage.getItem('accessToken') || null,
    userUuid: localStorage.getItem('userUuid') || '',
    isError: false,
    statusMessage: '',
};

interface Action {
    type: actions;
    payload: any;
}

export const authReducer = (
    state: AuthState = initialState,
    action: Action,
): AuthState => {
    switch (action.type) {
        case actions.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                statusMessage: '',
                userUuid: '',
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
                userUuid: action.payload.userUuid,
                isError: false,
                statusMessage: '',
            };
        case actions.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                accessToken: '',
                userUuid: '',
                isError: true,
                statusMessage: action.payload,
            };
        case actions.LOGOUT:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                userUuid: '',
                statusMessage: '',
                isError: false,
                accessToken: '',
            };
        case actions.SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSignedUp: false,
                statusMessage: '',
            };
        case actions.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSignedUp: true,
                statusMessage: '',
            };
        case actions.SIGNUP_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSignedUp: false,
                statusMessage: action.payload,
            };
        case actions.FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                statusMessage: '',
            };
        case actions.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                statusMessage: action.payload,
            };
        case actions.FORGOT_PASSWORD_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                statusMessage: action.payload,
            };
        case actions.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                statusMessage: '',
            };
        case actions.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                statusMessage: action.payload,
            };
        case actions.RESET_PASSWORD_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                statusMessage: action.payload,
            };
        default:
            return state;
    }
};
