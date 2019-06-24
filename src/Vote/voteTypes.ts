import { Question, User } from '../Question/questionTypes';
import { Answer } from '../Answer/answerTypes';

export interface Vote {
    uuid: string;
    rating: VoteRating;
    createdAt: Date;
    updatedAt: Date;
    voter: User;
    question: Question;
    answer: Answer;
}

export enum VoteRating {
    Upvote = 1,
    None = 0,
    Downvote = -1,
}

export enum VoteTarget {
    Question,
    Answer,
}

interface CreateVoteDto {
    rating: VoteRating;
    voterUuid: string;
}

export interface CreateQuestionVoteDto extends CreateVoteDto {
    questionUuid: string;
}

export interface CreateAnswerVoteDto extends CreateVoteDto {
    answerUuid: string;
}

export enum VoteActionTypes {
    CREATE_QUESTION_VOTE_REQUEST = 'CREATE_QUESTION_VOTE_REQUEST',
    CREATE_QUESTION_VOTE_SUCCESS = 'CREATE_QUESTION_VOTE_SUCCESS',
    CREATE_QUESTION_VOTE_FAILURE = 'CREATE_QUESTION_VOTE_FAILURE',
    CREATE_ANSWER_VOTE_REQUEST = 'CREATE_ANSWER_VOTE_REQUEST',
    CREATE_ANSWER_VOTE_SUCCESS = 'CREATE_ANSWER_VOTE_SUCCESS',
    CREATE_ANSWER_VOTE_FAILURE = 'CREATE_ANSWER_VOTE_FAILURE',
}

export interface VoteState {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    statusMessage: string;
}
