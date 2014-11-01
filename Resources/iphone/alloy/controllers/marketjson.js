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
    this.__controllerPath = "marketjson";
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
    $.__views.marketjson = Ti.UI.createWindow({
        title: "Market Locations",
        id: "marketjson"
    });
    $.__views.marketjson && $.addTopLevelView($.__views.marketjson);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.marketjson.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var sendit = Ti.Network.createHTTPClient({
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("There was an error during the connection");
        },
        timeout: 1e3
    });
    sendit.open("GET", "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=96813");
    sendit.send();
    sendit.onload = function() {
        var json = JSON.parse(this.responseText);
        0 == json.length && ($.table.headerTitle = "The database row is empty");
        var farmermarkets = json.results;
        for (var i = 0, iLen = farmermarkets.length; iLen > i; i++) {
            data.push(Alloy.createController("marketrow", {
                id: farmermarkets[i].id,
                marketname: farmermarkets[i].marketname
            }).getView());
            Ti.API.info(farmermarkets[i].id);
            Ti.API.info(farmermarkets[i].marketname);
        }
        $.table.setData(data);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;