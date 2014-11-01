// Get a singleton reference to our notes collection:
var myNotes = Alloy.Collections.notes;

// Add a new note to the collection and closes the current window

function addNoteToCollection() {
	var note = Alloy.createModel('notes', {
		title : $.titleInput.value,
		location : $.locationInput.value,
		note : $.noteInput.value
	});
	myNotes.add(note);
	note.save();
	$.addnote.close();
}