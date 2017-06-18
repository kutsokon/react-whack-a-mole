import { INITIAL_SPEED } from '../constants/index';

const speed = (state = INITIAL_SPEED, action) => {
	if (action.type === 'INCREASE') {
		return state + action.payload;
	}

	return state;
};

export default speed;
