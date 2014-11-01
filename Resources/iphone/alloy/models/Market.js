var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {},
        adapter: {
            type: "restapi",
            collection_name: "market"
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

model = Alloy.M("market", exports.definition, []);

collection = Alloy.C("market", exports.definition, model);

exports.Model = model;

exports.Collection = collection;