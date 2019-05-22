import { QuestionState, QuestionActionTypes as actions } from './questionTypes';

const initialState: QuestionState = {
    isLoading: false,
    items: [],
    isError: false,
    statusMessage: '',
};

interface Action {
    type: actions;
    payload: any;
}

export const questionReducer = (
    state: QuestionState = initialState,
    action: Action,
): QuestionState => {
    switch (action.type) {
        case 'GET_QUESTIONS_REQUEST':
            return {
                ...state,
                isLoading: true,
                isError: false,
                statusMessage: '',
            };
        case 'GET_QUESTIONS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                items: action.payload,
                isError: false,
                statusMessage: '',
            };
        case 'GET_QUESTIONS_FAILURE':
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
