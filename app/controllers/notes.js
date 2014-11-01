var myNotes = Alloy.Collections.notes;
// fetch existing list items from storage
myNotes.fetch();

function showNote(event) {
	var selectedNote = event.source;
	var args = {
		title : selectedNote.title,
		location : selectedNote.location,
		note : selectedNote.note
	};
	var noteview = Alloy.createController("notedetails", args).getView();
	
	if (OS_IOS) {
		$.navGroupWin.openWindow(noteview);
	}
}

function addNote() {
	var myAddNote = Alloy.createController("addnote",{}).getView();
	if (OS_IOS) {
		$.navGroupWin.openWindow(myAddNote);
	}
}
// Open main window
if(OS_IOS) { 
   $.navGroupWin.open(); 
} 