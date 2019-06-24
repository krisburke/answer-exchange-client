import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import {
    Answer,
    CreateAnswerDto,
    AnswerActionTypes as actions,
} from './answerTypes';
import service from '../Question/QuestionService';

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
