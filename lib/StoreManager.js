'use strict';
  var StoreManager
  , strftime 	= require('strftime')
  , classifier 		= require('./classifier')
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
				
				// Training data?
				// -- tag.classifier.train "positive"{ interaction.content any "apple" }				
				if (item.interaction && item.interaction.content && item.interaction.tag_tree && item.interaction.tag_tree.classifier && item.interaction.tag_tree.classifier.train){
					classifier.addDocument(item.interaction.content, item.interaction.tag_tree.classifier.train);
				}

				
    	}
		}
	} catch (e){
		console.log('DEBUG: ' + e);
	}
  
};

StoreManager.fn.getTags = function () {
	return classifier.generateTags();
}

module.exports = StoreManager;