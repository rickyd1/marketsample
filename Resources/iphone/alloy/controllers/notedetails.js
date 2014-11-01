function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notedetails";
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
    $.__views.notedetails = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "notedetails"
    });
    $.__views.notedetails && $.addTopLevelView($.__views.notedetails);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId14"
    });
    $.__views.notedetails.add($.__views.__alloyId14);
    $.__views.titleLabel = Ti.UI.createLabel({
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "titleLabel"
    });
    $.__views.__alloyId14.add($.__views.titleLabel);
    $.__views.locationLabel = Ti.UI.createLabel({
        font: {
            fontSize: "18"
        },
        left: "10",
        id: "locationLabel"
    });
    $.__views.__alloyId14.add($.__views.locationLabel);
    $.__views.noteLabel = Ti.UI.createLabel({
        font: {
            fontSize: "15"
        },
        left: "10",
        id: "noteLabel"
    });
    $.__views.__alloyId14.add($.__views.noteLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    console.log("title:" + args.title + ", location: " + args.location + ", note: " + args.note);
    $.titleLabel.text = args.title;
    $.locationLabel.text = args.location;
    $.noteLabel.text = args.note;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;