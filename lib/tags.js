'use strict';
var		natural 		= require('natural')
		, classifier 	= new natural.BayesClassifier()
		;
  
module.exports = {
	generateTags: function() {
		return JSON.stringify(classifier);
	}
}