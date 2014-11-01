function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId29(e) {
        if (e && e.fromAdapter) return;
        __alloyId29.opts || {};
        var models = whereFunction(__alloyId28);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId25 = models[i];
            __alloyId25.__transform = transformFunction(__alloyId25);
            var __alloyId27 = Alloy.createController("itemrow", {
                $model: __alloyId25,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId27.getViewEx({
                recurse: true
            }));
        }
        $.__views.itemTable.setData(rows);
    }
    function whereFunction(collection) {
        return whereIndex ? collection.where({
            done: 1 === whereIndex ? 0 : 1
        }) : collection.models;
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.item = transform.item;
        return transform;
    }
    function addShopItem() {
        Alloy.createController("additem").getView().open();
    }
    function showItems(e) {
        whereIndex = "undefined" != typeof e.index && null !== e.index ? e.index : INDEXES[e.source.title];
        shopitems.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "shoppinglist";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
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
    $.__views.shoplistWin = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.DEFAULT,
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        id: "shoplistWin",
        title: "Shopping List"
    });
    $.__views.shoplistWin && $.addTopLevelView($.__views.shoplistWin);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#85b2d3",
                offset: 0
            }, {
                color: "#a7c7dc",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.shoplistWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        left: "10dp",
        color: "#4D9AD1",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Shopping List",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: "48dp",
        width: "3dp",
        top: "1dp",
        right: "50dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#4D9AD1",
                offset: 0
            }, {
                color: "#ADC0CE",
                offset: .5
            }, {
                color: "#4D9AD1",
                offset: 1
            } ]
        },
        id: "__alloyId24"
    });
    $.__views.header.add($.__views.__alloyId24);
    $.__views.addItem = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp",
        id: "addItem"
    });
    $.__views.header.add($.__views.addItem);
    addShopItem ? $.__views.addItem.addEventListener("click", addShopItem) : __defers["$.__views.addItem!click!addShopItem"] = true;
    $.__views.addImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/ic_menu_add.png",
        touchEnabled: false,
        id: "addImage"
    });
    $.__views.addItem.add($.__views.addImage);
    $.__views.itemTable = Ti.UI.createTableView({
        top: Alloy.Globals.tableTop,
        bottom: "46dp",
        id: "itemTable"
    });
    $.__views.shoplistWin.add($.__views.itemTable);
    var __alloyId28 = Alloy.Collections["shoplist"] || shoplist;
    __alloyId28.on("fetch destroy change add remove reset", __alloyId29);
    $.__views.footer = Ti.UI.createView({
        bottom: 0,
        height: "46dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#4D9AD1",
                offset: 0
            }, {
                color: "#ADC0CE",
                offset: .5
            }, {
                color: "#4D9AD1",
                offset: 1
            } ]
        },
        id: "footer"
    });
    $.__views.shoplistWin.add($.__views.footer);
    var __alloyId31 = [];
    var __alloyId35 = {
        title: "All Items"
    };
    __alloyId31.push(__alloyId35);
    var __alloyId36 = {
        title: "To Bag"
    };
    __alloyId31.push(__alloyId36);
    var __alloyId37 = {
        title: "Bagged"
    };
    __alloyId31.push(__alloyId37);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        backgroundColor: "#fff",
        index: 0,
        height: 40,
        left: 20,
        right: 20,
        labels: __alloyId31,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    showItems ? $.__views.tabbedbar.addEventListener("click", showItems) : __defers["$.__views.tabbedbar!click!showItems"] = true;
    exports.destroy = function() {
        __alloyId28.off("fetch destroy change add remove reset", __alloyId29);
    };
    _.extend($, $.__views);
    var shopitems = Alloy.Collections.shoplist;
    var INDEXES = {
        All: 0,
        Active: 1,
        Done: 2
    };
    var whereIndex = INDEXES["All"];
    shopitems && shopitems.fetch();
    __defers["$.__views.addItem!click!addShopItem"] && $.__views.addItem.addEventListener("click", addShopItem);
    __defers["$.__views.tabbedbar!click!showItems"] && $.__views.tabbedbar.addEventListener("click", showItems);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;