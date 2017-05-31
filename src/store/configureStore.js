import { createStore, applyMiddleware } from 'redux';
import loger from 'redux-logger';
import reducer from '../reducers/index';

const configureStore = initialState => createStore(reducer, initialState, applyMiddleware(loger));

export default configureStore;
