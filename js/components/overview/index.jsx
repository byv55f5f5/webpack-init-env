import React from 'react';

import lang from '../../multilang/MultiLanguage';

const Overview = () => (
	<div id="overview-page" className="page">
		<div className="page-title">
			<span>
				{lang.getLang('OVERVIEW')}
			</span>
		</div>
		<div className="page-desc">
			<span>
				{lang.getLang('OVERVIEW_DESC')}
			</span>
		</div>
		<div className="page-contents">
			<div id="status-control-cont">
				<input type="checkbox" name="macfee-status-control" id="macfee-status-control" />
				<label htmlFor="macfee-status-control">
					<span>
						{lang.getLang('MCAFEE_ENABLED')}
					</span>
				</label>
			</div>
			<div id="status-illu-cont">
				<img src="" alt="Enable" />
				<br />
				<span>
					{lang.getLang('MCAFEE_ENABLED')}
				</span>
			</div>
			<div className="license-info">
				<span>
					{lang.getLang('LAST_VIRUS_DEF_UPDATE')}
				</span>
				<span>
					{'2018/05/08'}
				</span>
			</div>
			<div className="license-info">
				<span>
					{lang.getLang('LICENSE_INFORMATION')}
				</span>
			</div>
			<div className="license-info">
				<span>
					{lang.getLang('STATUS')}
				</span>
				<span>
					{lang.getLang('VALID_LICENSE')}
				</span>
			</div>
			<div className="license-info">
				<span>
					{lang.getLang('LICENSE_EXP_DATE')}
				</span>
				<span>
					{'2020/02/16 (723 days)'}
				</span>
			</div>
			<button type="button">
				{lang.getLang('LICENSE_MANAGEMENT')}
			</button>
			<table>
				<thead>
					<tr>
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
						<th>
							{lang.getLang('SCHEDULES')}
						</th>
					</tr>
				</thead>
			</table>
		</div>
	</div>
);

Overview.propTypes = {
};
export default Overview;
