import { combineReducers } from 'redux';

const mainState = {
	page: 1,
};

function mainStateApp(state = mainState, action) {
	switch (action.type) {
	case 'SWITCH_MAIN_PAGE':
		return Object.assign({}, state, {
			page: action.page,
		});
	default:
		return state;
	}
}

const MainReducer = combineReducers({
	mainStateApp,
});
export default MainReducer;
