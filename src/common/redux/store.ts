import { Store, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState } from './reducer';
import createRootReducer from './reducer';

function configureStore(): Store<ApplicationState> {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createRootReducer(),
        composeEnhancers(applyMiddleware(thunk)),
    );

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            store.replaceReducer(require('./reducer').default);
        });
    }

    return store;
}

export default configureStore;
