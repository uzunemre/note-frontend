import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from "./reducers";

const configureStore = (addLogger = true) => {
    const middleware = addLogger
        ? applyMiddleware(thunk, logger)
        : applyMiddleware(thunk);

    const store = createStore(combineReducers({
        ...reducers
    }), middleware);

    return store;
};

export default configureStore;
