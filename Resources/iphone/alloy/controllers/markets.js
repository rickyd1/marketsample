function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function webView() {
        var websview = Alloy.createController("marketwebview").getView();
        $.navMarketGroupWin.openWindow(websview);
    }
    function jsonList() {
        var jsonsview = Alloy.createController("marketjson").getView();
        $.navMarketGroupWin.openWindow(jsonsview);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "markets";
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
    $.__views.marketWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "marketWin",
        title: "My Market Notes"
    });
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId10"
    });
    $.__views.marketWin.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "Select a View",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createButton({
        title: "Web View",
        id: "__alloyId12"
    });
    $.__views.__alloyId10.add($.__views.__alloyId12);
    webView ? $.__views.__alloyId12.addEventListener("click", webView) : __defers["$.__views.__alloyId12!click!webView"] = true;
    $.__views.__alloyId13 = Ti.UI.createButton({
        title: "JSON List",
        id: "__alloyId13"
    });
    $.__views.__alloyId10.add($.__views.__alloyId13);
    jsonList ? $.__views.__alloyId13.addEventListener("click", jsonList) : __defers["$.__views.__alloyId13!click!jsonList"] = true;
    $.__views.navMarketGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.marketWin,
        id: "navMarketGroupWin"
    });
    $.__views.navMarketGroupWin && $.addTopLevelView($.__views.navMarketGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.navMarketGroupWin.open();
    __defers["$.__views.__alloyId12!click!webView"] && $.__views.__alloyId12.addEventListener("click", webView);
    __defers["$.__views.__alloyId13!click!jsonList"] && $.__views.__alloyId13.addEventListener("click", jsonList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;