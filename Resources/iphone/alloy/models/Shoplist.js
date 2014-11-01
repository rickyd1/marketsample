var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            item: "text",
            done: "integer",
            date_completed: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "shoplist"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) {
                        if ("item" === key && value.length <= 0) return "Error: No item!";
                        if ("done" === key && value.length <= 0) return "Error: No completed flag!";
                    }
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(shoplist) {
                return shoplist.get("done");
            }
        });
        return Collection;
    }
};

model = Alloy.M("shoplist", exports.definition, [ function(migration) {
    migration.name = "shoplist";
    migration.id = "20141030202530";
    var preload_data = [ {
        item: "Papaya",
        done: 0
    }, {
        item: "Pears",
        done: 0
    }, {
        item: "Apples",
        done: 0
    } ];
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                item: "text",
                done: "integer",
                date_completed: "text"
            }
        });
        for (var i = 0; i < preload_data.length; i++) migrator.insertRow(preload_data[i]);
    };
    migration.down = function(migrator) {
        migrator.dropTable("shoplist");
    };
} ]);

collection = Alloy.C("shoplist", exports.definition, model);

exports.Model = model;

exports.Collection = collection;