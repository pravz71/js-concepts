const async = require('async');
const arrayStack = [];

const functionFirst = (callback) => {
	// Do Some Actions
	callback(undefined, "First Function Result");
};

const functionSecond = (callback) => {
	// Do Some Actions
	// callback({err: "some error occured again"}, undefined);
	// return;
	callback(undefined, "Second Function Result");
};

const functionThird = (callback) => {
	// Do Some Actions
	// callback({err: "some error occured"}, undefined);
	// return;
	callback(undefined, "Third Function Result");
};

arrayStack.push(functionFirst, functionSecond, functionThird);

const startTime = Date.now();
async.parallel(arrayStack, (error, message) => {
	if(error)
		console.log(error);
	else
		console.log(message);
	const endTime = Date.now();
	console.log("Total Time: ", endTime - startTime);
});

// We can also pass an object

const objectStack = {};

objectStack.functionFirst = (callback) => {
	// Do Some Actions
	callback(undefined, "First Function Result from objectStack");
};

objectStack.functionSecond = (callback) => {
	// Do Some Actions
	callback(undefined, "Second Function Result from objectStack");
};

objectStack.functionThird = (callback) => {
	// Do Some Actions
	// callback({err: "some error occured"}, undefined);
	// return;
	callback(undefined, "Third Function Result from objectStack");
};

async.parallel(objectStack, (err, results) => {
	if(err)
		console.log(err);
	else
		console.log(results);
});

