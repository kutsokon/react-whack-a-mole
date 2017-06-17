import tileActions from '../actions/tileActions';
import { INITIAL_SPEED } from '../constants/speed';
import { TILES_QUANTITY } from '../constants/general';

const generateRandomTileIndex = quantity => Math.floor(Math.random() * quantity);

const startGameAction = {
	type: 'START_GAME'
};
const stopGameAction = {
	type: 'STOP_GAME'
};
let interval = null;

const startGame = () => (dispatch) => {
	dispatch(startGameAction);

	interval = setInterval(() => {
		dispatch({
			...tileActions.activeRandomTile,
			randomNumber: generateRandomTileIndex(TILES_QUANTITY)
		});
	}, INITIAL_SPEED);
};

const stopGame = () => (dispatch) => {
	clearInterval(interval);
	dispatch(stopGameAction);
};


export default { startGame, stopGame };
