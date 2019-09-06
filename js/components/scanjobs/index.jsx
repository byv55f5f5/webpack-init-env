import React from 'react';
import lang from '../../multilang/MultiLanguage';

const ScanJobs = () => {
	// renderer
	return (
		<div id="scanjobs-page" className="page">
			<div className="page-title">
				<span>
					{lang.getLang('SCAN_JOBS')}
				</span>
			</div>
			<div className="page-desc">
				<span>
					{lang.getLang('SCAN_JOBS_DESC')}
				</span>
			</div>
			<div className="page-contents">
				<div id="scan-jobs-ctrl-cont">
					<button type="button">
						{lang.getLang('ADD_SCAN_JOB')}
					</button>
					<button type="button">
						{lang.getLang('DELETE')}
					</button>
					<input type="text" />
				</div>
				<div id="scan-jobs-list">
					<table>
						<thead>
							<tr>
								<th>
									<input type="checkbox" id="scan-jobs-select-all" />
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
								<th>
									{lang.getLang('SCHEDULES')}
								</th>
								<th>
									{lang.getLang('ACTION')}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="checkbox" className=""/></td>
								<td>Job 01</td>
								<td>xxxx/xx/xx xx:xx:xx</td>
								<td>xx:xx:xx</td>
								<td>1</td>
								<td>Daily, 12:00</td>
								<td>
									<button type="button"></button>
									<button type="button"></button>
									<button type="button"></button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

ScanJobs.propTypes = {
};
export default ScanJobs;
