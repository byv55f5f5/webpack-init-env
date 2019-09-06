import React from 'react';
import ReactModal from 'react-modal';
import MainMenuCont from '../containers/MainMenuCont';
import PageContentCont from '../containers/PageContentCont';

const Layout = () => {
	return (
		<div id="mcafee-layout" className="layout">
			<div id="mcafee-frameset" className="frameset"></div>
			<div id="mcafee-main-content" className="main-content">
				<MainMenuCont />
				<PageContentCont page={1} />
				<ReactModal isOpen={false} overlayClassName="overlay" />
			</div>
		</div>
	);
};
export default Layout;
