// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

if (OS_IOS) {
	Alloy.Collections.shoplist = Alloy.createCollection('shoplist');
	Alloy.Collections.notes = Alloy.createCollection('notes');	
	Alloy.Collections.market = Alloy.createCollection('market');
	Alloy.Globals.top = 0;
	Alloy.Globals.tableTop = '50dp';

	try {
		// check for iOS7
		if (OS_IOS && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
			Alloy.Globals.top = '20dp';
			Alloy.Globals.tableTop = '70dp';
		}
	} catch(e) {
		// catch and ignore
	}
}