import {
    VoteActionTypes as actions,
    VoteActionTypes,
    VoteState,
} from './voteTypes';

const initialState: VoteState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    statusMessage: '',
};

interface Action {
    type: actions;
    payload: any;
}

export const voteReducer = (
    state: VoteState = initialState,
    action: Action,
): VoteState => {
    switch (action.type) {
        case VoteActionTypes.CREATE_QUESTION_VOTE_REQUEST:
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                statusMessage: '',
            };
        case VoteActionTypes.CREATE_QUESTION_VOTE_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                statusMessage: '',
            };
        case VoteActionTypes.CREATE_QUESTION_VOTE_FAILURE:
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
