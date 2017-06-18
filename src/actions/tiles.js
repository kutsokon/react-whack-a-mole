import { TILES_QUANTITY } from '../constants/index';

const generateRandomTileIndex = quantity => Math.floor(Math.random() * quantity);

const clearTiles = () => ({
	type: 'CLEAR_TILES'
});

const toggleTile = id => ({
		type: 'TOGGLE_TILE',
		id
	});

const activeRandomTile = {
	type: 'ACTIVE_RANDOM_TILE',
	randomNumber: generateRandomTileIndex(TILES_QUANTITY)
};

export default { toggleTile, activeRandomTile, clearTiles };
