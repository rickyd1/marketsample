// This sync adapter makes HTTP requests to the BookService to manage data

// Global URL variable
var BASE_URL = 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=96813';

// Override the Backbone.sync method with the following
module.exports.sync = function(method, model, options) {

	var payload = model.toJSON();
	var error;

	switch(method) {

		// This case is called by the Model.fetch and Collection.fetch methods to retrieve data.
		case 'read':
			http_request('GET', 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=96813', null, callback);
			break;
		case 'create':
		case 'delete':
		case 'update':			
		default :
			error = 'ERROR: Sync method not recognized!';
	};

	if (error) {
		options.error(model, error, options);
		Ti.API.error(error);
		model.trigger('error');
	}

	// Simple default callback function for HTTP request operations.
	function callback(success, response, error) {
		res = JSON.parse(response);
		if (success) {
			// Calls the default Backbone success callback
			// and invokes a custom callback if options.success was defined.
			options.success(res, JSON.stringify(res), options);
		}
		else {
			// Calls the default Backbone error callback
			// and invokes a custom callback if options.error was defined.
			var err = res.error || error;
			Ti.API.error('ERROR: ' + err);
			options.error(model, error, options);
			model.trigger('error');
		}
	};
};

// Helper function for creating an HTTP request
function http_request(method, url, payload, callback) {

	var client = Ti.Network.createHTTPClient({
		onload: function(e) {
			if (callback) callback(true, this.responseText, null);
		},
		onerror: function(e) {
			if (callback) callback(false, this.responseText, e.error);
		},
		timeout : 5000
	});

	client.open(method, url);
	client.send(payload);
};

// Perform some actions before creating the Model class
module.exports.beforeModelCreate = function(config, name) {
	config = config || {};
	// If there is a base_url defined in the model file, use it
	if (config.adapter.base_url) {
		BASE_URL = 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=96813';
	}
	return config;
};

// Perform some actions after creating the Model class 
module.exports.afterModelCreate = function(Model, name) {
	// Nothing to do
};