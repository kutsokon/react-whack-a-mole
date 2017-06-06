
const initialState = [
	{
		status: 'disabled'
	},	
	{
		status: 'disabled'
	},	
	{
		status: 'disabled'
	},	
	{
		status: 'disabled'
	},	
	{
		status: 'disabled'
	},	
	{
		status: 'disabled'
	},
];

const tiles = (state = initialState, action) => {
	if (action.type === 'ADD_TILE') {
		return [...state, action.payload];
	}

	return state;
};

export default tiles;
