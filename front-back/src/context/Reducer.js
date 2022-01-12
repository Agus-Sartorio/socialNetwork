
export const Reducer = (state, {type}) => {
	switch (type) {
		case 'TOGGLE_THEME':
			return {
				...state,
				theme: state.theme==='dark'?'light': 'dark'
			};
		case 'TOGGLE_LANG':
            return {
				...state,
				lang: state.lang==='en'?'es':'en'
			};
		default:
			return state;
	}
};