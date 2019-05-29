import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import service from './QuestionService';
import {
    CreateQuestionDto,
    IncludeOpts,
    Question,
    QuestionActionTypes as actions,
} from './questionTypes';

export const getQuestionsRequest = () => action(actions.GET_QUESTIONS_REQUEST);

export const getQuestionsSuccess = (questions: Question[]) =>
    action(actions.GET_QUESTIONS_SUCCESS, questions);

export const getQuestionsFailure = (errorMessage: string) =>
    action(actions.GET_QUESTIONS_FAILURE, errorMessage);

export const getQuestions = () => (dispatch: Dispatch) => {
    dispatch(getQuestionsRequest());
    return service
        .getQuestions({ include: IncludeOpts.Author })
        .then(({ data }: AxiosResponse<Question[]>) => {
            dispatch(getQuestionsSuccess(data));
        })
        .catch((error: AxiosError) =>
            dispatch(getQuestionsFailure(error.message)),
        );
};

export const getQuestionRequest = () => action(actions.GET_QUESTION_REQUEST);

export const getQuestionSuccess = (question: Question) =>
    action(actions.GET_QUESTION_SUCCESS, question);

export const getQuestionFailure = (errorMessage: string) =>
    action(actions.GET_QUESTION_FAILURE, errorMessage);

export const getQuestion = (uuid: string) => (dispatch: Dispatch) => {
    dispatch(getQuestionRequest());
    return service
        .getQuestion(uuid, { include: IncludeOpts.Author })
        .then(({ data }: AxiosResponse<Question>) => {
            dispatch(getQuestionSuccess(data));
        })
        .catch((error: AxiosError) =>
            dispatch(getQuestionFailure(error.message)),
        );
};

export const createQuestionRequest = () =>
    action(actions.CREATE_QUESTION_REQUEST);

export const createQuestionSuccess = (question: Question) =>
    action(actions.CREATE_QUESTION_SUCCESS, question);

export const createQuestionFailure = (errorMessage: string) =>
    action(actions.CREATE_QUESTION_FAILURE, errorMessage);

export const createQuestion = (createQuestionDto: CreateQuestionDto) => (
    dispatch: Dispatch,
) => {
    dispatch(createQuestionRequest());
    return service
        .createQuestion(createQuestionDto)
        .then(({ data }: AxiosResponse<Question>) => {
            dispatch(createQuestionSuccess(data));
        })
        .catch((error: AxiosError) =>
            dispatch(createQuestionFailure(error.message)),
        );
};