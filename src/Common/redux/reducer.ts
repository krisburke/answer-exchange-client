import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { QuestionState } from '../../Question/questionTypes';
import { questionReducer } from '../../Question/questionReducer';
import { AuthState } from '../../Auth/authTypes';
import { authReducer } from '../../Auth/authReducer';

export interface ApplicationState {
    router: RouterState;
    question: QuestionState;
    auth: AuthState;
}

export default (history: History) =>
    combineReducers<ApplicationState>({
        router: connectRouter(history),
        question: questionReducer,
        auth: authReducer,
    });
