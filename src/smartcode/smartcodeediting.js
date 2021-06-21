import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import SmartcodeCommand from './smartcodecommand';

export default class SmartcodeEditing extends Plugin {
	init() {
		this.editor.commands.add( 'smartcode', new SmartcodeCommand( this.editor ) );

		this.editor.config.define( 'smartcodeConfig', {
			types: [ 'smartcodeConfig not defined' ]
		} );
	}
}
