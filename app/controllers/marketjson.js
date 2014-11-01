var data = [];  
  
var sendit = Ti.Network.createHTTPClient({  
  
 onerror : function(e) {  
  
  Ti.API.debug(e.error);  
  
  alert('There was an error during the connection');  
  
 },  
  
 timeout : 1000,  
  
});  
  
// Here you have to change it for your local zipcode    
sendit.open('GET', 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=96813');  
  
sendit.send();  
  
// Function to be called upon a successful response  
  
sendit.onload = function() {  
  
 var json = JSON.parse(this.responseText);  
    
 // if the database is empty show an alert  
  
 if (json.length == 0) {  
  $.table.headerTitle = "The database row is empty";  
 }  
   
  
 // Insert the JSON data to the table view  
 var farmermarkets = json.results;  
 for ( var i = 0, iLen = farmermarkets.length; i < iLen; i++) {  
  
  data.push(Alloy.createController('marketrow', {  
   	id : farmermarkets[i].id,  
   	marketname : farmermarkets[i].marketname  
  
  }).getView());  
  
  // data.push(row);  
  
  Ti.API.info(farmermarkets[i].id);  
  Ti.API.info(farmermarkets[i].marketname);  
  
 }  
  
 $.table.setData(data);  
};   
