import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loger from 'redux-logger';
import reducer from '../reducers/index';

const configureStore = initialState => createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, loger)
);

export default configureStore;
