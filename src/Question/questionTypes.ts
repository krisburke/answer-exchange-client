export interface Question {
    uuid: string;
    title: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    author?: User;
    comments?: Comment[];
    answers?: Answer[];
    tags?: Tag[];
}

export interface QuestionReponseDto {
    results: Question[];
    pageTotal: number;
    total: number;
}

export interface CreateQuestionDto {
    title: string;
    text: string;
    authorUserUuid: string;
}

export interface CreateAnswerDto {
    text: string;
    authorUserUuid: string;
    questionUuid: string;
}

export interface User {
    uuid: string;
    username: string;
    displayName: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
    questions?: Question[];
    answers?: Answer[];
    comments?: Comment[];
}

export interface Answer {
    uuid: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    author?: User;
    comments?: Comment[];
    question?: Question;
}

export interface Tag {
    uuid: string;
    slug: string;
    createdAt: Date;
    questions?: Question[];
}

export interface Comment {
    uuid: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    author?: User;
    question?: Question;
    answer?: Answer;
}

export interface QuestionState {
    readonly items: Question[];
    readonly isLoading: boolean;
    readonly isError: boolean;
    readonly statusMessage: string;
    readonly current: Question | null;
}

export interface GetQuestionsOpts {
    expand?: string;
    take: number;
    skip: number;
}

export interface GetQuestionOpts {
    expand?: string;
}

export enum QuestionActionTypes {
    GET_QUESTIONS_REQUEST = 'GET_QUESTIONS_REQUEST',
    GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS',
    GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE',
    GET_QUESTION_REQUEST = 'GET_QUESTION_REQUEST',
    GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS',
    GET_QUESTION_FAILURE = 'GET_QUESTION_FAILURE',
    CREATE_QUESTION_REQUEST = 'CREATE_QUESTION_REQUEST',
    CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS',
    CREATE_QUESTION_FAILURE = 'CREATE_QUESTION_FAILURE',
    CREATE_ANSWER_REQUEST = 'CREATE_ANSWER_REQUEST',
    CREATE_ANSWER_SUCCESS = 'CREATE_ANSWER_SUCCESS',
    CREATE_ANSWER_FAILURE = 'CREATE_ANSWER_FAILURE',
}
