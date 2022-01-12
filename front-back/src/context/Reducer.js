
export const Reducer = (state, {type, payload}) => {
	switch (type) {
		case 'GET_USERS':
			return {
				...state,
				users: payload,
			};
		default:
			return state;
	}
};