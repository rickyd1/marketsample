var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            title: "string",
            location: "string",
            note: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "notes"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("notes", exports.definition, [ function(migration) {
    migration.name = "notes";
    migration.id = "20141030202530";
    var preload_data = [ {
        title: "My First Note",
        location: "Ala Moana",
        note: "Great Papaya"
    }, {
        title: "My Second Note",
        location: "KCC",
        note: "Best Manogs at back store"
    } ];
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                title: "text",
                location: "text",
                note: "text"
            }
        });
        for (var i = 0; i < preload_data.length; i++) migrator.insertRow(preload_data[i]);
    };
    migration.down = function(migrator) {
        migrator.dropTable("notes");
    };
} ]);

collection = Alloy.C("notes", exports.definition, model);

exports.Model = model;

exports.Collection = collection;