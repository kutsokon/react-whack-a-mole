import { combineReducers } from 'redux';
import tiles from './tiles';
import score from './score';
import speed from './speed';
import game from './game';

export default combineReducers({ tiles, score, speed, game });
