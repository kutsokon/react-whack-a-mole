const score = (state = 0, action) => {
	if (action.type === 'INCREMENT_SCORE') {
		return state + 1;
	}

	return state;
};

export default score;
