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
    this.__controllerPath = "marketwebview";
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
    $.__views.marketwebview = Ti.UI.createWindow({
        id: "marketwebview"
    });
    $.__views.marketwebview && $.addTopLevelView($.__views.marketwebview);
    $.__views.marketView = Ti.UI.createWebView({
        id: "marketView",
        url: "https://data.hawaii.gov/w/kpdu-pehk/w4u8-7ba7?cur=73wjzJCBhNP&from=root"
    });
    $.__views.marketwebview.add($.__views.marketView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;