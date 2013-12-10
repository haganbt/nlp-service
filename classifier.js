
var limdu = require('limdu');

// Initialize a multi-label classifier with a feature extractor and past-training-samples:
var spamClassifier = new limdu.classifiers.EnhancedClassifier({
    		classifierType:   limdu.classifiers.Bayesian.bind(this, {
					globalThreshold:  1.5
				}),
        featureExtractor: limdu.features.NGramsOfWords(2),
        pastTrainingSamples: [],
});


spamClassifier.trainBatch([
	{ input: "cheap replica watch es", output: 'spam' },
	{ input: "cheap replica watch to buy", output: 'spam' },
	{ input: "your watch is ready", output: 'nospam' },
	{ input: "I don't know if this works on windows", output: 'nospam' },
	{ input: "cheap windows !!!", output: 'spam' },
]);



console.log(spamClassifier.classify("cheap clocks !!!", 1));
console.log(spamClassifier.classify("I don't know if this is a replica of windows", 1));
console.log(spamClassifier.classify("replica", 1));
console.log(spamClassifier.classify("your", 1));
console.log(spamClassifier.classify("watch", 1));
	
	
console.log(JSON.stringify(spamClassifier));
