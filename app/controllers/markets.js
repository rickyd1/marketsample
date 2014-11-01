// open the "add item" window
function webView() {
	var websview = Alloy.createController("marketwebview").getView();
	
	if (OS_IOS) {
		$.navMarketGroupWin.openWindow(websview);
	}
}
// open the "add item" window
function jsonList() {
	var jsonsview = Alloy.createController("marketjson").getView();
	
	if (OS_IOS) {
		$.navMarketGroupWin.openWindow(jsonsview);
	}
}
// Open main window
if(OS_IOS) { 
   $.navMarketGroupWin.open(); 
} 