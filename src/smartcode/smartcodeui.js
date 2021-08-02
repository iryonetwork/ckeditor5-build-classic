import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { addListToDropdown, createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';

import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';

export default class SmartcodeUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;
		const smartcodeNames = editor.config.get( 'smartcodeConfig.types' );

		// The "smartcode" dropdown must be registered among the UI components of the editor
		// to be displayed in the toolbar.
		editor.ui.componentFactory.add( 'smartcode', locale => {
			const dropdownView = createDropdown( locale );

			// Populate the list in the dropdown with items.
			addListToDropdown( dropdownView, getDropdownItemsDefinitions( smartcodeNames ) );

			dropdownView.buttonView.set( {
				// The t() function helps localize the editor. All strings enclosed in t() can be
				// translated and change when the language of the editor changes.
				label: t( 'Smartcode' ),
				class: 'smartcode-dropdown',
				tooltip: true,
				withText: true
			} );

			// Execute the command when the dropdown item is clicked (executed).
			this.listenTo( dropdownView, 'execute', evt => {
				editor.execute( 'smartcode', { value: evt.source.commandParam } );
				editor.editing.view.focus();
			} );

			return dropdownView;
		} );
	}
}

function getDropdownItemsDefinitions( smartcodeNames ) {
	const itemDefinitions = new Collection();

	for (let i = 0; i < smartcodeNames.length; i++) {
		const definition = {
			type: 'button',
			model: new Model( {
				commandParam: smartcodeNames[i].value,
				label: smartcodeNames[i].label,
				withText: true
			} )
		};
		// Add the item definition to the collection.
		itemDefinitions.add( definition );
	}

	return itemDefinitions;
}
