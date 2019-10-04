import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import PlaceholderCommand from './placeholdercommand';

export default class PlaceholderEditing extends Plugin {
	init() {
		this.editor.commands.add( 'placeholder', new PlaceholderCommand( this.editor ) );

		this.editor.config.define( 'placeholderConfig', {
			types: [ 'placeholderConfig not defined' ]
		} );
	}
}
