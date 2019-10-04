import Command from '@ckeditor/ckeditor5-core/src/command';

export default class PlaceholderCommand extends Command {
	execute( { value } ) {
		const editor = this.editor;

		editor.model.change( writer => {
			const insertPosition = editor.model.document.selection.getFirstPosition();

			// Put the selection on the inserted element.
			writer.insertText( `[${ value }]`, insertPosition );
		} );
	}
}
