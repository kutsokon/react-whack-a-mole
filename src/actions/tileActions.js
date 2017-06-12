const toggleTile = id => (dispatch) => {
		dispatch({
			type: 'TOGGLE_TILE',
			id
		});
	};

const activeRandomTile = {
	type: 'ACTIVE_RANDOM_TILE'
}

const clearTiles = {
	type: 'CLEAR_TILES'
};

export default { toggleTile, activeRandomTile, clearTiles };
