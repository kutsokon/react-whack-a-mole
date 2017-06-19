import { combineReducers } from 'redux';
import tiles from './tiles';
import scores from './scores';
import speed from './speed';
import game from './game';

export default combineReducers({ tiles, scores, speed, game });
