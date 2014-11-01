function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function addNoteToCollection() {
        var note = Alloy.createModel("notes", {
            title: $.titleInput.value,
            location: $.locationInput.value,
            note: $.noteInput.value
        });
        myNotes.add(note);
        note.save();
        $.addnote.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addnote";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addnote = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "addnote"
    });
    $.__views.addnote && $.addTopLevelView($.__views.addnote);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.addnote.add($.__views.__alloyId2);
    $.__views.titleInput = Ti.UI.createTextField({
        id: "titleInput",
        hintText: "Title..."
    });
    $.__views.__alloyId2.add($.__views.titleInput);
    $.__views.locationInput = Ti.UI.createTextField({
        id: "locationInput",
        hintText: "Location..."
    });
    $.__views.__alloyId2.add($.__views.locationInput);
    $.__views.noteInput = Ti.UI.createTextField({
        id: "noteInput",
        hintText: "Notes..."
    });
    $.__views.__alloyId2.add($.__views.noteInput);
    $.__views.insertNoteButton = Ti.UI.createButton({
        title: "Add",
        id: "insertNoteButton"
    });
    $.__views.__alloyId2.add($.__views.insertNoteButton);
    addNoteToCollection ? $.__views.insertNoteButton.addEventListener("click", addNoteToCollection) : __defers["$.__views.insertNoteButton!click!addNoteToCollection"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var myNotes = Alloy.Collections.notes;
    __defers["$.__views.insertNoteButton!click!addNoteToCollection"] && $.__views.insertNoteButton.addEventListener("click", addNoteToCollection);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;