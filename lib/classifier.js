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
		var tags = '';
		
		for (var k in classifier.features) {
        if (classifier.features.hasOwnProperty(k)) {
       		tags+='tag.presales ' + k + ' { interaction.content ANY "' + classifier.features[k] + '" } ' + "\n";
        }
    }
		
		return tags;
		
	
	}
}