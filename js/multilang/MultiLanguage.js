import ENG from './ENG';
import TCH from './TCH';

import * as MainActions from '../actions/MainAction';

export class MultiLanguage {
	constructor(lang) {
		this.langTbl = {};
		switch (lang) {
		case 'ENG':
			this.langTbl = ENG();
			break;
		case 'TCH':
			this.langTbl = TCH.getLangTbl();
			break;
		default:
			this.langTbl = ENG.getLangTbl();
			break;
		}
	}

	getLang(lanKey) {
		if (this.langTbl[lanKey]) {
			return this.langTbl[lanKey];
		}
		const engLang = ENG.getLangTbl();
		if (engLang[lanKey]) return engLang[lanKey];
		return 'lanKey';
	}

	changeLang(lang) {
		switch (lang) {
		case 'ENG':
		case 'ENC':
			this.langTbl = ENG.getLangTbl();
			break;
		case 'TCH':
			this.langTbl = TCH.getLangTbl();
			break;
		default:
			this.langTbl = ENG.getLangTbl();
			break;
		}
		MainActions.changeLang();
	}

	static getBrowserLang() {
		let browLang = navigator.language;
		browLang = browLang.toLowerCase();
		let resLang;

		switch (browLang) {
		case 'zh-tw':
		case 'zh-hk':
			resLang = 'TCH';
			break;

		case 'zh-cn':
		case 'zh-sg':
			resLang = 'SCH';
			break;

		case 'en':
		case 'en-us':
		case 'en-gb':
		case 'en-au':
		case 'en-ca':
		case 'en-nz':
		case 'en-ie':
		case 'en-za':
		case 'en-jm':
		case 'en-bz':
		case 'en-tt':
			resLang = 'ENG';
			break;

		case 'cs':
			resLang = 'CZE';
			break;

		case 'da':
			resLang = 'DAN';
			break;

		case 'de':
		case 'de-ch':
		case 'de-at':
		case 'de-lu':
		case 'de-li':
			resLang = 'GER';
			break;

		case 'es':
		case 'es-ar':
		case 'es-gt':
		case 'es-cr':
		case 'es-pa':
		case 'es-do':
		case 'es-mx':
		case 'es-ve':
		case 'es-co':
		case 'es-pe':
		case 'es-ec':
		case 'es-cl':
		case 'es-uy':
		case 'es-py':
		case 'es-bo':
		case 'es-sv':
		case 'es-hn':
		case 'es-ni':
		case 'es-pr':
			resLang = 'SPA';
			break;

		case 'fr':
		case 'fr-be':
		case 'fr-ca':
		case 'fr-ch':
		case 'fr-lu':
			resLang = 'FRE';
			break;

		case 'it':
		case 'it-ch':
			resLang = 'ITA';
			break;

		case 'ja':
			resLang = 'JPN';
			break;

		case 'ko':
			resLang = 'KOR';
			break;

		case 'no':
			resLang = 'NOR';
			break;

		case 'pl':
			resLang = 'POL';
			break;

		case 'ru':
		case 'ru-mo':
			resLang = 'RUS';
			break;

		case 'fi':
			resLang = 'FIN';
			break;

		case 'sv':
		case 'sv-fi':
			resLang = 'SWE';
			break;

		case 'nl':
		case 'nl-be':
			resLang = 'DUT';
			break;

		case 'tr':
			resLang = 'TUR';
			break;

		case 'th':
			resLang = 'THA';
			break;

		case 'pt-br':
		case 'pt':
			resLang = 'POR';
			break;

		case 'hu':
			resLang = 'HUN';
			break;

		case 'el':
			resLang = 'GRK';
			break;

		case 'ro':
		case 'ro-mo':
			resLang = 'ROM';
			break;

		default:
			resLang = 'ENG';
		}
		return resLang;
	}
}

const lang = new MultiLanguage('ENG');
export default lang;
