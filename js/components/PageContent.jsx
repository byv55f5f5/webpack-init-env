import React from 'react';
import PropTypes from 'prop-types';

import Overview from './overview';
import Settings from './settings';
import ScanJobs from './scanjobs';
import Reports from './reports';
import Quarantine from './quarantine';

const PageContent = ({ page }) => {
	// renderer
	function renderPageContent() {
		let currentpage = 1;
		switch (page) {
		case 1:
			currentpage = <Overview />;
			break;
		case 2:
			currentpage = <Settings />;
			break;
		case 3:
			currentpage = <ScanJobs />;
			break;
		case 4:
			currentpage = <Reports />;
			break;
		case 5:
			currentpage = <Quarantine />;
			break;
		default:
			break;
		}
		return currentpage;
	}
	return (
		<div id="mcafee-page-content" className="page-content">
			{renderPageContent()}
		</div>
	);
};

PageContent.propTypes = {
	page: PropTypes.number
};
export default PageContent;