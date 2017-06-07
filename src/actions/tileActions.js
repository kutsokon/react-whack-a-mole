const toggleTile = (id) => {
	return (dispatch) => {
		dispatch({
			type: 'TOGGLE_TILE',
			id: id
		})
	}
}

export default { toggleTile };
