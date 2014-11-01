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
    this.__controllerPath = "index";
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
    var __alloyId3 = [];
    $.__views.__alloyId5 = Alloy.createController("markets", {
        id: "__alloyId5"
    });
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5.getViewEx({
            recurse: true
        }),
        title: "Markets",
        icon: "KS_nav_ui.png",
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.__alloyId7 = Alloy.createController("notes", {
        id: "__alloyId7"
    });
    $.__views.__alloyId6 = Ti.UI.createTab({
        window: $.__views.__alloyId7.getViewEx({
            recurse: true
        }),
        title: "Notes",
        icon: "KS_nav_views.png",
        id: "__alloyId6"
    });
    __alloyId3.push($.__views.__alloyId6);
    $.__views.__alloyId9 = Alloy.createController("shoppinglist", {
        id: "__alloyId9"
    });
    $.__views.__alloyId8 = Ti.UI.createTab({
        window: $.__views.__alloyId9.getViewEx({
            recurse: true
        }),
        title: "Shopping List",
        icon: "KS_nav_ui.png",
        id: "__alloyId8"
    });
    __alloyId3.push($.__views.__alloyId8);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId3,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;