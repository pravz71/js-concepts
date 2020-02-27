const parser = (objectToParse) => {
	const keys = Object.keys(objectToParse);
	const newObject = {};
	keys.forEach(key => {
		if(typeof(objectToParse[key]) === 'object' && objectToParse[key] !== null) {
			newObject[key] = parser(objectToParse[key]);
		} else {
			newObject[key] = objectToParse[key];
		}
	});
	return newObject;
};


//Parses array as array and not as object like the above method
//above method converts objects to arrays
const newCustomParser = (objectToParse) => {
	const keys = Object.keys(objectToParse);
	const newObject = {};
	keys.forEach(key => {
		if(typeof(objectToParse[key]) === 'object' && objectToParse[key] !== null) {
			if(objectToParse[key].constructor === Object) {
				newObject[key] = parser(objectToParse[key]);
			}
			else if(objectToParse[key].constructor === Array) {
				const arrayObject = parser(objectToParse[key]);
				newObject[key] = Object.keys(arrayObject).map(idx => arrayObject[idx]);
			}
		} else {
			newObject[key] = objectToParse[key];
		}
	});
	return newObject;
};

const newCustomParserAll = (elementToParse) => {
	const keys = Object.keys(elementToParse);
	let newElement;
	if(typeof(elementToParse) === null) {
		newElement = null;
	} else if(elementToParse.constructor === Object) {
		newElement = {};
		const keys = Object.keys(elementToParse);
		keys.forEach(key => {
			newElement[key] = newCustomParserAll(elementToParse[key]);
		});
	} else if(elementToParse.constructor === Array) {
		newElement = elementToParse.map((ele => newCustomParserAll(ele)));
	} else {
		newElement = elementToParse
	}
	return newElement
};	



const arr ={ 
	gender: 'male',
	email: 'p@g.com',
	age: 24,
	name: { 
		title: 'mr',
		first: 'brad',
		last: 'gibson' 
	},
	arr: [1,2,3, 'fhsjks'],
	printGreeting: function() {
		console.log(`Hi my name is ${this.name.title} ${this.name.first} ${this.name.last}`);
	} 
};
console.log(JSON.parse(JSON.stringify(arr)))

console.log(newCustomParserAll(arr))
module.exports = parser;