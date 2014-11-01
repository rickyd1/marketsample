function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId20(e) {
        if (e && e.fromAdapter) return;
        __alloyId20.opts || {};
        var models = __alloyId19.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId18 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId16.__transform["title"] ? __alloyId16.__transform["title"] : __alloyId16.get("title"),
                location: "undefined" != typeof __alloyId16.__transform["location"] ? __alloyId16.__transform["location"] : __alloyId16.get("location"),
                note: "undefined" != typeof __alloyId16.__transform["note"] ? __alloyId16.__transform["note"] : __alloyId16.get("note")
            });
            rows.push(__alloyId18);
            showNote ? __alloyId18.addEventListener("click", showNote) : __defers["__alloyId18!click!showNote"] = true;
        }
        $.__views.__alloyId15.setData(rows);
    }
    function showNote(event) {
        var selectedNote = event.source;
        var args = {
            title: selectedNote.title,
            location: selectedNote.location,
            note: selectedNote.note
        };
        var noteview = Alloy.createController("notedetails", args).getView();
        $.navGroupWin.openWindow(noteview);
    }
    function addNote() {
        var myAddNote = Alloy.createController("addnote", {}).getView();
        $.navGroupWin.openWindow(myAddNote);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notes";
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
    $.__views.noteWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "noteWin",
        title: "My Market Notes"
    });
    $.__views.__alloyId15 = Ti.UI.createTableView({
        id: "__alloyId15"
    });
    $.__views.noteWin.add($.__views.__alloyId15);
    var __alloyId19 = Alloy.Collections["notes"] || notes;
    __alloyId19.on("fetch destroy change add remove reset", __alloyId20);
    var __alloyId23 = [];
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "Add Note"
    });
    __alloyId23.push($.__views.add);
    addNote ? $.__views.add.addEventListener("click", addNote) : __defers["$.__views.add!click!addNote"] = true;
    $.__views.__alloyId21 = Ti.UI.iOS.createToolbar({
        items: __alloyId23,
        bottom: "0",
        id: "__alloyId21"
    });
    $.__views.noteWin.add($.__views.__alloyId21);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.noteWin,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId19.off("fetch destroy change add remove reset", __alloyId20);
    };
    _.extend($, $.__views);
    var myNotes = Alloy.Collections.notes;
    myNotes.fetch();
    $.navGroupWin.open();
    __defers["__alloyId18!click!showNote"] && __alloyId18.addEventListener("click", showNote);
    __defers["$.__views.add!click!addNote"] && $.__views.add.addEventListener("click", addNote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;