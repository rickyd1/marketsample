function http_request(method, url, payload, callback) {
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            callback && callback(true, this.responseText, null);
        },
        onerror: function(e) {
            callback && callback(false, this.responseText, e.error);
        },
        timeout: 5e3
    });
    client.open(method, url);
    client.send(payload);
}

var BASE_URL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=96813";

module.exports.sync = function(method, model, options) {
    function callback(success, response, error) {
        res = JSON.parse(response);
        if (success) options.success(res, JSON.stringify(res), options); else {
            var err = res.error || error;
            Ti.API.error("ERROR: " + err);
            options.error(model, error, options);
            model.trigger("error");
        }
    }
    model.toJSON();
    var error;
    switch (method) {
      case "read":
        http_request("GET", "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=96813", null, callback);
        break;

      case "create":
      case "delete":
      case "update":
      default:
        error = "ERROR: Sync method not recognized!";
    }
    if (error) {
        options.error(model, error, options);
        Ti.API.error(error);
        model.trigger("error");
    }
};

module.exports.beforeModelCreate = function(config) {
    config = config || {};
    config.adapter.base_url && (BASE_URL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=96813");
    return config;
};

module.exports.afterModelCreate = function() {};