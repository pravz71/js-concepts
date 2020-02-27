const async = require('async');
const stack = [];

const functionFirst = (callback) => {
	// Do Some Actions
	setTimeout(() => {
		callback(undefined, "First");
	}, 5000);	
};

const functionSecond = (res,callback) => {
	// Do Some Actions
	// callback({err: "some error occured again"}, undefined);
	// return;
	setTimeout(() => {
		callback(undefined, res + " Second");
	}, 5000);	
};

const functionThird = (res, callback) => {
	// Do Some Actions
	// callback({err: "some error occured"}, undefined);
	// return;
	setTimeout(() => {
		callback(undefined, res + " Third");
	}, 5000);	
};

stack.push(functionFirst, functionSecond, functionThird);

const startTime = Date.now();
async.waterfall(stack, (error, message) => {
	if(error)
		console.log(error);
	else
		console.log(message);
	const endTime = Date.now();
	console.log("Total Time: ", endTime - startTime);
});


// We can also pass an object


