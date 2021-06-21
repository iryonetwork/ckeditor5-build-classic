import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import SmartcodeEditing from './smartcodeediting';
import SmartcodeUI from './smartcodeui';

export default class Smartcode extends Plugin {
	static get requires() {
		return [ SmartcodeEditing, SmartcodeUI ];
	}
}
