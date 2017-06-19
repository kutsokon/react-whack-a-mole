import tilesActions from './tiles';
import { INITIAL_SPEED, TILES_QUANTITY } from '../constants/index';

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
			...tilesActions.activeRandomTile,
			randomNumber: generateRandomTileIndex(TILES_QUANTITY)
		});
	}, INITIAL_SPEED);
};

const stopGame = () => (dispatch) => {
	clearInterval(interval);
	dispatch(stopGameAction);
	dispatch(tilesActions.clearTiles);
};


export default { startGame, stopGame };
