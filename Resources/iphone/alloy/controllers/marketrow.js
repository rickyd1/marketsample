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
    this.__controllerPath = "marketrow";
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
    $.__views.marketrow = Ti.UI.createTableViewRow({
        id: "marketrow"
    });
    $.__views.marketrow && $.addTopLevelView($.__views.marketrow);
    $.__views.marketname = Ti.UI.createLabel({
        font: {
            fontSize: "16"
        },
        left: "10",
        id: "marketname"
    });
    $.__views.marketrow.add($.__views.marketname);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.marketname.text = args.marketname.substr(4);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;