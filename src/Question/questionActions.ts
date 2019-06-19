import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';
import service from './QuestionService';
import {
    Answer,
    CreateAnswerDto,
    CreateQuestionDto,
    GetQuestionOpts,
    GetQuestionsOpts,
    Question,
    QuestionActionTypes as actions,
    QuestionReponseDto,
} from './questionTypes';

export const getQuestionsRequest = () => action(actions.GET_QUESTIONS_REQUEST);

export const getQuestionsSuccess = (questionResponseDto: QuestionReponseDto) =>
    action(actions.GET_QUESTIONS_SUCCESS, questionResponseDto);

export const getQuestionsFailure = (errorMessage: string) =>
    action(actions.GET_QUESTIONS_FAILURE, errorMessage);

export const getQuestions = ({ expand, skip, take }: GetQuestionsOpts) => (
    dispatch: Dispatch,
) => {
    dispatch(getQuestionsRequest());
    return service
        .getQuestions({ expand, skip, take })
        .then(({ data }: AxiosResponse<QuestionReponseDto>) => {
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

export const getQuestion = (uuid: string, { expand }: GetQuestionOpts) => (
    dispatch: Dispatch,
) => {
    dispatch(getQuestionRequest());
    return service
        .getQuestion(uuid, { expand })
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
