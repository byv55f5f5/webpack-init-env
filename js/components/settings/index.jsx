import React from 'react';
import lang from '../../multilang/MultiLanguage';

const Settings = () => {
	// renderer
	return (
		<div id="settings-page" className="page">
			<div className="page-title">
				<span>
					{lang.getLang('SETTINGS')}
				</span>
			</div>
			<div className="page-desc">
				<span>
					{lang.getLang('SETTINGS_DESC')}
				</span>
			</div>
			<div className="page-contents">
				<div id="virus-def-update-cont">
					<span>
						{lang.getLang('VIRUS_DEF_UPDATE')}
					</span>
					<br />
					<span>
						{lang.getLang('CHECK_VIRUS_DEF_FREQ')}
					</span>
					<input type="text" />
					<br />
					<span>
						{lang.getLang('ONLINE_UPDATE')}
					</span>
					<button type="button">
						{lang.getLang('UPDATE_NOW')}
					</button>
					<br />
					<span>
						{lang.getLang('MANUAL_UPDATE')}
					</span>
					<input type="file" name="virus-def-file" id="virus-def-file" />
					<br />
					<span>
						{lang.getLang('UPDATE_FILE_AT')}
					</span>
					<a href="http://update.nai.com/Products/CommonUpdater">
						{'http://update.nai.com/Products/CommonUpdater'}
					</a>
				</div>
				<div id="log-management-cont">
					<span>
						{lang.getLang('LOGS_MANAGEMENT')}
					</span>
					<span>
						{lang.getLang('NUMBER_DAYS_KEEP_LOGS')}
					</span>
					<input type="text" />
					<br />
					<span>
						{lang.getLang('ARCHIVE_LOGS')}
					</span>
					<br />
					<span>
						{lang.getLang('SAVE_ARCHIVE_FOLDER')}
					</span>
					<select>
						<option value="download">
							{'/Download'}
						</option>
					</select>
				</div>
				<button type="button">
					{lang.getLang('APPLY')}
				</button>
			</div>
		</div>
	);
};

Settings.propTypes = {
};
export default Settings;
