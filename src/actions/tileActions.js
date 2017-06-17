import { TILES_QUANTITY } from '../constants/general';

const generateRandomTileIndex = quantity => Math.floor(Math.random() * quantity);

const toggleTile = (id) => {
	return {
		type: 'TOGGLE_TILE',
		id
	};
};

const activeRandomTile = {
	type: 'ACTIVE_RANDOM_TILE',
	randomNumber: generateRandomTileIndex(TILES_QUANTITY)
};

export default { toggleTile, activeRandomTile };
