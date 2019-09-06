import React from 'react';
import lang from '../../multilang/MultiLanguage';

const Quarantine = () => (
	<div id="quarantine-page" className="page">
		<div className="page-title">
			<span>
				{lang.getLang('QUARANTINE')}
			</span>
		</div>
		<div className="page-desc">
			<span>
				{lang.getLang('QUARANTINE_DESC')}
			</span>
		</div>
		<div className="page-contents">
			<div id="quarantine-ctrl-cont">
				<button type="button">
					{lang.getLang('RESTORE_SELECTED_FILES')}
				</button>
				<button type="button">
					{lang.getLang('DELETE_SELECTED_FILES')}
				</button>
				<button type="button">
					{lang.getLang('DELETE_ALL_FILES')}
				</button>
			</div>
			<div id="quarantine-list">
				<table>
					<thead>
						<tr>
							<th>
								<input type="checkbox" id="quarantine-select-all" />
							</th>
							<th>
								{lang.getLang('FILE_NAME')}
							</th>
							<th>
								{lang.getLang('PATH')}
							</th>
							<th>
								{lang.getLang('VIRUS_NAME')}
							</th>
							<th>
								{lang.getLang('JOB_NAME')}
							</th>
							<th>
								{lang.getLang('ACTION')}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input type="checkbox" className="" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
);

Quarantine.propTypes = {
};
export default Quarantine;
