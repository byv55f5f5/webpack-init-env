import React from 'react';
import lang from '../../multilang/MultiLanguage';

const Reports = () => {
	// renderer
	return (
		<div id="reports-page" className="page">
			<div className="page-title">
				<span>
					{lang.getLang('REPORTS')}
				</span>
			</div>
			<div className="page-desc">
				<span>
					{lang.getLang('REPORTS_DESC')}
				</span>
			</div>
			<div className="page-contents">
				<div id="reports-ctrl-cont">
					<button type="button">
						{lang.getLang('DOWNLOAD')}
					</button>
					<button type="button">
						{lang.getLang('DELETE')}
					</button>
					<input type="text" />
				</div>
				<div id="reports-list">
					<table>
						<thead>
							<tr>
								<th>
									<input type="checkbox" id="reports-select-all" />
								</th>
								<th>
									{lang.getLang('JOB_NAME')}
								</th>
								<th>
									{lang.getLang('LAST_SCAN')}
								</th>
								<th>
									{lang.getLang('DURATION')}
								</th>
								<th>
									{lang.getLang('INFECTED_FILES')}
								</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	);
};

Reports.propTypes = {
};
export default Reports;
