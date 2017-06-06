import { combineReducers } from 'redux';
import tiles from './tiles';
import score from './score';
import speed from './speed';

export default combineReducers({ tiles, score, speed });
