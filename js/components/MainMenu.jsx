import React from 'react';
import PropTypes from 'prop-types';

const MainMenu = ({onItemClick}) => {
	return (
		<div id="mcafee-main-menu" className="main-menu">
			<div className="main-menu-item" onClick={() => { onItemClick(1); }}>Overview</div>
			<div className="main-menu-item" onClick={() => { onItemClick(2); }}>Settings</div>
			<div className="main-menu-item" onClick={() => { onItemClick(3); }}>Scan Jobs</div>
			<div className="main-menu-item" onClick={() => { onItemClick(4); }}>Reports</div>
			<div className="main-menu-item" onClick={() => { onItemClick(5); }}>Quarantine</div>
		</div>
	);
};

MainMenu.propTypes = {
	page: PropTypes.number,
	onItemClick: PropTypes.func.isRequired
};

export default MainMenu;
