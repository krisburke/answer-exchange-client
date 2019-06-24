import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import service from './VoteService';
import {
    VoteActionTypes as actions,
    Vote,
    CreateQuestionVoteDto,
    CreateAnswerVoteDto,
} from './voteTypes';

export const createQuestionVoteRequest = () =>
    action(actions.CREATE_QUESTION_VOTE_REQUEST);

export const createQuestionVoteSuccess = () =>
    action(actions.CREATE_QUESTION_VOTE_SUCCESS);

export const createQuestionVoteFailure = (errorMessage: string) =>
    action(actions.CREATE_QUESTION_VOTE_FAILURE, errorMessage);

export const createQuestionVote = (
    createQuestionVoteDto: CreateQuestionVoteDto,
) => (dispatch: Dispatch) => {
    dispatch(createQuestionVoteRequest());
    return service
        .createQuestionVote(createQuestionVoteDto)
        .then(({ data }: AxiosResponse<Vote>) => {
            dispatch(createQuestionVoteSuccess());
        })
        .catch((error: AxiosError) =>
            dispatch(createQuestionVoteFailure(error.message)),
        );
};

export const createAnswerVoteRequest = () =>
    action(actions.CREATE_ANSWER_VOTE_REQUEST);

export const createAnswerVoteSuccess = () =>
    action(actions.CREATE_ANSWER_VOTE_SUCCESS);

export const createAnswerVoteFailure = (errorMessage: string) =>
    action(actions.CREATE_ANSWER_VOTE_FAILURE, errorMessage);

export const createAnswerVote = (createAnswerVoteDto: CreateAnswerVoteDto) => (
    dispatch: Dispatch,
) => {
    dispatch(createAnswerVoteRequest());
    return service
        .createAnswerVote(createAnswerVoteDto)
        .then(({ data }: AxiosResponse<Vote>) => {
            dispatch(createAnswerVoteSuccess());
        })
        .catch((error: AxiosError) =>
            dispatch(createAnswerVoteFailure(error.message)),
        );
};
