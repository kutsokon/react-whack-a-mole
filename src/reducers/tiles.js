import uuid from 'uuid/v4';
import { TILES_QUANTITY } from '../constants/general';

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

const toggleTile = (state, action) => state.map((tile) => {
		if (tile.id === action.id) {
			tile.mole = !tile.mole;
		}
		return tile;
	});

const toggleRandomTile = (state, randomIndex) => state.map((tile, index) => {
			if (index === randomIndex) {
				tile.mole = true;
			}
			return tile;
		});

const activeRandomTile = (state) => {
	let randomIndex = Math.floor(Math.random() * TILES_QUANTITY);

	if (!state[randomIndex].mole) {
		return toggleRandomTile(state, randomIndex);
	}

	randomIndex = Math.floor(Math.random() * TILES_QUANTITY);
	return toggleRandomTile(state, randomIndex);
};

const clearTiles = state => state.map((tile) => {
			tile.mole = false;
			return tile;
		});

const tiles = (state = tilesData, action) => {
	switch (action.type) {
		case 'ADD_TILE':
			return addTile(state, action);
		case 'TOGGLE_TILE':
			return toggleTile(state, action);
		case 'ACTIVE_RANDOM_TILE':
			return activeRandomTile(state);
		case 'CLEAR_TILES':
			return clearTiles(state);
		default:
			return state;
	}
};

export default tiles;
