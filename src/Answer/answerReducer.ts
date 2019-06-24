import { AnswerActionTypes as actions, AnswerState } from './answerTypes';

const initialState: AnswerState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    statusMessage: '',
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
                isLoading: true,
                isError: false,
                isSuccess: false,
                statusMessage: '',
            };
        case actions.CREATE_ANSWER_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                statusMessage: '',
            };
        case actions.CREATE_ANSWER_FAILURE:
            return {
                isLoading: false,
                isError: true,
                isSuccess: false,
                statusMessage: action.payload,
            };
        default:
            return state;
    }
};
