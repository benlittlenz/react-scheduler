import { createStore, applyMiddleware, compose } from 'redux';

import allReducer from '../../src'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];
const middleware = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(allReducer, middleware);

export default store;
