import { AnswerActionTypes as actions, AnswerState } from './answerTypes';

const initialState: AnswerState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    statusMessage: '',
    items: [],
};

interface Action {
    type: actions;
    payload: any;
}

export const answerReducer = (
    state: AnswerState = initialState,
    action: Action,
): AnswerState => {
    switch (action.type) {
        case actions.CREATE_ANSWER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                statusMessage: '',
            };
        case actions.CREATE_ANSWER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                statusMessage: '',
                items: [...state.items, action.payload],
            };
        case actions.CREATE_ANSWER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                statusMessage: action.payload,
            };
        case actions.GET_ANSWERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                statusMessage: '',
            };
        case actions.GET_ANSWERS_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                statusMessage: action.payload.message,
                items: action.payload.items,
            };
        case actions.GET_ANSWERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                statusMessage: action.payload.message,
            };
        default:
            return state;
    }
};
