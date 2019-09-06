import { connect } from 'react-redux';
import PageContent from '../components/PageContent';

const mapStateToProps = (state) => {
	return { page: state.mainStateApp.page };
};

const PageContentCont = connect(
	mapStateToProps
)(PageContent);

export default PageContentCont;