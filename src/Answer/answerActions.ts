import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import {
    Answer,
    CreateAnswerDto,
    AnswerActionTypes as actions,
    GetAnswersDto,
} from './answerTypes';
import service from './AnswerService';

export const createAnswerRequest = () => action(actions.CREATE_ANSWER_REQUEST);

export const createAnswerSuccess = (answer: Answer) =>
    action(actions.CREATE_ANSWER_SUCCESS, answer);

export const createAnswerFailure = (errorMessage: string) =>
    action(actions.CREATE_ANSWER_FAILURE, errorMessage);

export const createAnswer = (createAnswerDto: CreateAnswerDto) => (
    dispatch: Dispatch,
) => {
    dispatch(createAnswerRequest());
    return service
        .createAnswer(createAnswerDto)
        .then(({ data }: AxiosResponse<Answer>) => {
            dispatch(createAnswerSuccess(data));
        })
        .catch((error: AxiosError) =>
            dispatch(createAnswerFailure(error.message)),
        );
};

export const getAnswersRequest = () => action(actions.GET_ANSWERS_REQUEST);

export const getAnswersSuccess = (answers: Answer[]) =>
    action(actions.GET_ANSWERS_SUCCESS, { items: answers, message: '' });

export const getAnswersFailure = (message: string) =>
    action(actions.GET_ANSWERS_FAILURE, { message });

export const getAnswers = (getAnswersDto: GetAnswersDto) => (
    dispatch: Dispatch,
) => {
    dispatch(getAnswersRequest());
    return service
        .getAnswers(getAnswersDto)
        .then(({ data }: AxiosResponse<Answer[]>) => {
            dispatch(getAnswersSuccess(data));
        })
        .catch((error: AxiosError) =>
            dispatch(getAnswersFailure(error.message)),
        );
};
