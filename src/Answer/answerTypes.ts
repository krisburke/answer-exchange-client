import { Vote } from '../Vote/voteTypes';
import { Comment, Question, User } from '../Question/questionTypes';

export interface CreateAnswerDto {
    text: string;
    authorUserUuid: string;
    questionUuid: string;
}

export interface UpdateAnswerDto {
    text: string;
    questionUuid: string;
    answerUuid: string;
}

export interface GetAnswersDto {
    expand?: string;
    questionUuid: string;
}

export interface Answer {
    uuid: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    voteCount: number;
    author?: User;
    comments?: Comment[];
    question?: Question;
    votes?: Vote[];
}

export interface AnswerState {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    statusMessage: string;
    items: Answer[];
}

export enum AnswerActionTypes {
    CREATE_ANSWER_REQUEST = 'CREATE_ANSWER_REQUEST',
    CREATE_ANSWER_SUCCESS = 'CREATE_ANSWER_SUCCESS',
    CREATE_ANSWER_FAILURE = 'CREATE_ANSWER_FAILURE',
    GET_ANSWERS_REQUEST = 'GET_ANSWERS_REQUEST',
    GET_ANSWERS_SUCCESS = 'GET_ANSWERS_SUCCESS',
    GET_ANSWERS_FAILURE = 'GET_ANSWERS_FAILURE',
}
