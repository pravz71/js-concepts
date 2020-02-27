const async = require('async');
const stack = [];

const functionFirst = (callback) => {
	// Do Some Actions
	setTimeout(() => {
		callback(undefined, "First Function Result");
	}, 5000);	
};

const functionSecond = (callback) => {
	// Do Some Actions
	// callback({err: "some error occured again"}, undefined);
	// return;
	setTimeout(() => {
		callback(undefined, "Second Function Result");
	}, 5000);	
};

const functionThird = (callback) => {
	// Do Some Actions
	// callback({err: "some error occured"}, undefined);
	// return;
	setTimeout(() => {
		callback(undefined, "Third Function Result");
	}, 5000);	
};

stack.push(functionFirst, functionSecond, functionThird);

const startTime = Date.now();
async.series(stack, (error, message) => {
	if(error)
		console.log(error);
	else
		console.log(message);
	const endTime = Date.now();
	console.log("Total Time: ", endTime - startTime);
});


// We can also pass an object


/* function asyncForEach(array, cb) {
	array.forEach((i) => {
		setTimeout(() => cb(i), 0);
	});
}

asyncForEach([1, 2, 3, 4], (i) => {
	console.log(i);
})


function asyncForEach2(array, cb) {
	array.forEach(function(i) {
		setTimeout(() => cb(i), 0);
	});
}

asyncForEach2([1, 2, 3, 4], function(i) {
	console.log(i);
}) */

/* 
const generateFibonacci = (n) => {
	if (n == 1 || n == 2) {
		return n-1;
	}
	return (generateFibonacci(n - 1) + generateFibonacci(n - 2));
};
console.log(generateFibonacci(10)); */

const user = {
	name: 'Pravin',
	cities: ['A', 'B', 'C'],
	printPlacesLived: function() {
		that = this;
		this.cities.forEach(function (city) {
			name = city;
			console.log(this.name + " lived in " + city);
		});
	}
}

user.printPlacesLived();




