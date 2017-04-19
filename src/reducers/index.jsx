const initialState = {
	categories: [],
	category: "",
	resources: [],
	resource: "",
	articles: []
}

export default function manageApp(state = initialState, action) {
	switch(action.type) {
		case 'SET_CATEGORIES':
			return Object.assign({}, state, { categories: action.categories })
		case 'SET_CATEGORY':
			return Object.assign({}, state, { category: action.category }, { articles: []})
		case 'SET_RESOURCES':
			return Object.assign({}, state, { resources: action.resources })
		case 'SET_RESOURCE':
			return Object.assign({}, state, { resource: action.resource }, { articles: []})
		case 'SET_ARTICLES':
			return Object.assign({}, state, { articles: action.articles })
		default:
			return state;
	}
}