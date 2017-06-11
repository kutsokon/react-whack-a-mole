const toggleTile = id => (dispatch) => {
		dispatch({
			type: 'TOGGLE_TILE',
			id
		});
	};

const activeRandomTile = () => (dispatch) => {
		dispatch({
			type: 'ACTIVE_RANDOM_TILE'
		});
	};

const clearTiles = () => (dispatch) => {
		dispatch({
			type: 'CLEAR_TILES'
		});
	};

export default { toggleTile, activeRandomTile, clearTiles };
