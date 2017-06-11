const startGameAction = {
	type: 'START_GAME'
};

const startGame = () => (dispatch) => {
	dispatch(startGameAction);
};


export default { startGame };
