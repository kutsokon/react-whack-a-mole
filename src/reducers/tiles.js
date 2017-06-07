import uuid from 'uuid/v4';
import { TILES_QUANTITY } from '../constants/general';

const blankTilesData = Array(TILES_QUANTITY);
const tilesData = [];

// init tiles
for (let i = 0; i < blankTilesData.length; i = i + 1) {
	tilesData.push({
		mole: false,
		id: uuid()
	});
}

const tiles = (state = tilesData, action) => {
	switch (action.type) {
		case 'ADD_TILE':
			return [...state, action.payload];
			break;
		case 'TOGGLE_TILE':
			return state.map((tile) => {
				if (tile.id === action.id) {
					tile.mole = !tile.mole;
				}
				return tile;
			})
			break;
		default:
			return state;
			break;
	}
};

export default tiles;
