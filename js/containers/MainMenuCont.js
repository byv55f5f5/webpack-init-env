import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu';
import { switchMainPage } from '../actions/MainAction';

const mapStateToProps = (state) => {
	return {
		page: state.mainStateApp.page
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onItemClick: (page) => {
			dispatch(switchMainPage(page));
		}
	};
};

const MainMenuCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainMenu);

export default MainMenuCont;
