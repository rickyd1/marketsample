exports.definition = {

    config : {
        "columns" : {},
        "adapter" : {
            "type" : "restapi",
            "collection_name" : "market"
        }
    },

    extendModel : function(Model) {
        _.extend(Model.prototype, {
        
        });
        // end extend

        return Model;
    },

    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {

        });
        // end extend

        return Collection;
    }
};

