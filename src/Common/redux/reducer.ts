import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { QuestionState } from '../../Question/questionTypes';
import { AuthState } from '../../Auth/authTypes';
import { VoteState } from '../../Vote/voteTypes';
import { AnswerState } from '../../Answer/answerTypes';
import { questionReducer } from '../../Question/questionReducer';
import { authReducer } from '../../Auth/authReducer';
import { voteReducer } from '../../Vote/voteReducer';
import { answerReducer } from '../../Answer/answerReducer';

export interface ApplicationState {
    router: RouterState;
    question: QuestionState;
    auth: AuthState;
    vote: VoteState;
    answer: AnswerState;
}

export default (history: History) =>
    combineReducers<ApplicationState>({
        router: connectRouter(history),
        question: questionReducer,
        auth: authReducer,
        vote: voteReducer,
        answer: answerReducer,
    });
