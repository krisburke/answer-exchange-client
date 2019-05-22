import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { ApplicationState } from '../Common/redux/reducer';
import { Routes } from './Routes';
import './App.css';

interface Props {
    store: Store<ApplicationState>;
    history: History;
}

export const App: React.FC<Props> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
};
