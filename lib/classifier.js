'use strict';
var		natural 		= require('natural')
		, classifier 	= new natural.BayesClassifier()
		;
  
module.exports = {
	
	addDocument: function(text, classification) {
 		classifier.addDocument(text, classification);
		classifier.train();
	},
	
	generateTags: function() {
		return JSON.stringify(classifier.features);
		//console.log(classifier.features.length);
		
		for(var i = 0; i < classifier.features.length; i++){
	    console.log(classifier.features[i]);
	}
		
		
	
	}
}