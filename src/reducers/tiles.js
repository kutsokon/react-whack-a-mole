import uuid from 'uuid/v4';
import { TILES_QUANTITY } from '../constants/index';

const blankTilesData = Array(TILES_QUANTITY);
const tilesData = [];

// init tiles
for (let i = 0; i < blankTilesData.length; i += 1) {
	tilesData.push({
		mole: false,
		id: uuid()
	});
}

const addTile = (state, action) => [...state, action.payload];

const clearTiles = state => state.map((tile) => {
	tile.mole = false;
	return tile;
});

const toggleTile = (state, action) => state.map((tile) => {
		if (tile.id === action.id && tile.mole) {
			tile.mole = !tile.mole;
		}
		return tile;
	});

const toggleRandomTile = (state, randomNumber) => state.map((tile, index) => {
			tile.mole = false;
			if (index === randomNumber) {
				tile.mole = true;
			}
			return tile;
		});

const activeRandomTile = (state, randomNumber) => toggleRandomTile(state, randomNumber);

const tiles = (state = tilesData, action) => {
	switch (action.type) {
		case 'ADD_TILE':
			return addTile(state, action);
		case 'CLEAR_TILES':
			return clearTiles(state, action);
		case 'TOGGLE_TILE':
			return toggleTile(state, action);
		case 'ACTIVE_RANDOM_TILE':
			return activeRandomTile(state, action.randomNumber);
		default:
			return state;
	}
};

export default tiles;
