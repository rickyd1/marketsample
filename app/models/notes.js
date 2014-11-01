exports.definition = {
	config: {
		"columns": {
			"title": "string",
			"location": "string",
			"note": "string"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "notes"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extend functions and properties woudl go here
		});		
		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extend functions and properties would go here
		});
		return Collection;
	}
};