import tileActions from '../actions/tileActions';
import { INITIAL_SPEED } from '../constants/speed';

const startGameAction = {
	type: 'START_GAME'
};
const stopGameAction = {
	type: 'STOP_GAME'
};
let interval = null;

const startGame = () => (dispatch, getState) => {
	dispatch(startGameAction);
	
	interval = setInterval(() => {
		dispatch(tileActions.clearTiles);
		dispatch(tileActions.activeRandomTile);
	}, INITIAL_SPEED);
};

const stopGame = () => (dispatch) => {
	clearInterval(interval);
	dispatch(stopGameAction);
}


export default { startGame, stopGame };
