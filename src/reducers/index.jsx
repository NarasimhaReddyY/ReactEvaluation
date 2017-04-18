const initialState = {
	categories: [],
	category: ""	
}

export default function manageApp(state = initialState, action) {
	//yet to handle resources and articles
	switch(action.type) {
		case 'SET_CATEGORIES':
			return Object.assign({}, state, { categories: action.categories })
		case 'SET_CATEGORY':
			return Object.assign({}, state, { category: action.category })
		default:
			return state;
	}
}