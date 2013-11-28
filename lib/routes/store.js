(function () {
  'use strict';   
  var StoreManager = require('../StoreManager');

  module.exports = function (modules) {
    var storeManager = new StoreManager;

    return {
    	show: function (request, response) {
      	
      	var tags = storeManager.getTags();
      	response.render('index', { bodyContent: tags } );
			},

    	save: function (request, response) {
      	storeManager.process(request);
      	return response.send(200, {"success":true});
    	},
       
    };
  };
})();
