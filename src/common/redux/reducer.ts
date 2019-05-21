import { combineReducers } from 'redux';

export interface ApplicationState {
    test?: true;
}

const createRootReducer = () => combineReducers<ApplicationState>({});

export default createRootReducer;
