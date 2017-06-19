import { TILES_QUANTITY } from '../constants/index';
import { incrementScore } from './scores';

const generateRandomTileIndex = quantity => Math.floor(Math.random() * quantity);

const clearTiles = () => ({
	type: 'CLEAR_TILES'
});

const toggleTile = id => (dispatch, getState) => {
	const isGameInProgress = getState().game.isGameInProgress;
	const isTileActive = getState().tiles.find(tile => (tile.id === id) && tile.mole);

	if (isGameInProgress && isTileActive) {
		dispatch(incrementScore('player'));

		return {
			type: 'TOGGLE_TILE',
			id
		};
	}

	return false;
};

const activeRandomTile = {
	type: 'ACTIVE_RANDOM_TILE',
	randomNumber: generateRandomTileIndex(TILES_QUANTITY)
};

export default { toggleTile, activeRandomTile, clearTiles };
