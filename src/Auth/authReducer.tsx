import { AuthState, AuthActionTypes as actions } from './authTypes';

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    accessToken: null,
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
                accessToken: action.payload.accessToken,
                isError: false,
                statusMessage: '',
            };
        case 'LOGIN_FAILED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                statusMessage: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoading: false,
                isError: false,
                statusMessage: '',
                accessToken: '',
            };
        default:
            return state;
    }
};
