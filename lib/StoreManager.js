'use strict';
  var StoreManager
  , strftime 	= require('strftime')
  ;


StoreManager = function StoreManager() {

};

StoreManager.fn = StoreManager.prototype;


StoreManager.fn.process = function (inbound) {

	try {
		var body = inbound.rawBody.split(/\r?\n/);
		for (var i in body) {
    	if (body.hasOwnProperty(i)) {
    		
  			var item = JSON.parse(body[i]);
				console.log(item);
				
    	}
		}
	} catch (e){
		console.log('DEBUG: ' + e);
	}
  
};


module.exports = StoreManager;