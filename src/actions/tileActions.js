const toggleTile = (id) => ({
	type: 'TOGGLE_TILE',
	id
});

const activeRandomTile = {
	type: 'ACTIVE_RANDOM_TILE'
}

export default { toggleTile, activeRandomTile };
