import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-quill/dist/quill.snow.css';
import './Common/global.css';

import App from './App/App';
import configureStore from './Common/redux/store';

const history = createBrowserHistory();
export const store = configureStore(history);

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
