import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { ApplicationState } from '../Common/redux/reducer';
import { Routes } from './Routes';

interface Props {
    store: Store<ApplicationState>;
    history: History;
}

export default function App({ store, history }: Props) {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
}
