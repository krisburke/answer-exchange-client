import { AuthState, AuthActionTypes as actions } from './authTypes';

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    accessToken: null,
    userUuid: '',
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
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoading: true,
                isError: false,
                statusMessage: '',
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
                userUuid: action.payload.userUuid,
                isError: false,
                statusMessage: '',
            };
        case 'LOGIN_FAILED':
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                accessToken: '',
                userUuid: '',
                isError: true,
                statusMessage: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                userUuid: '',
                statusMessage: '',
                isError: false,
                accessToken: '',
            };
        default:
            return state;
    }
};
