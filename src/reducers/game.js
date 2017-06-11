const initialGameState = {
	isGameInProgress: false
};

const game = (state = initialGameState, action) => {
	if (action.type === 'START_GAME') {
		return { ...state, isGameInProgress: true };
	}

	if (action.type === 'STOP_GAME') {
		return { ...state, isGameInProgress: false };
	}

	return state;
};

export default game;
