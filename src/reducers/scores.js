const initialScores = {
	player: 0,
	mole: 0
};

const incrementById = (state, id) => state[id] + 1;

const decrementById = (state, id) => (state[id] <= 0 ? 0 : state[id] - 1);

const scores = (state = initialScores, action) => {
	switch (action.type) {
		case 'INCREMENT_SCORE':
			return {
				...state,
				[action.id]: incrementById(state, action.id)
			};
		case 'DECREMENT_SCORE':
			return {
				...state,
				[action.id]: decrementById(state, action.id)
			};
		default:
			return state;
	}
};

export default scores;
