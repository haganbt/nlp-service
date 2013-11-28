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
					
					// Get the classifications on each feature
        	var eachClass = classifier.getClassifications(k);
        	// Itterate through each of the classifications returned
        	for (var t in eachClass) {
        		//console.log(k + " : " + eachClass[t].label + " - " + eachClass[t].value);
        	  tags+='tag.' + eachClass[t].label+ ' ' + eachClass[t].value + ' { interaction.content ANY "' + k + '" } \n';
        	}
        }
    }
		
		return tags;

	}
};