const dataObj = { 
	gender: 'male',
	email: 'p@g.com',
	age: 24,
	name: { 
		title: 'mr',
		first: 'brad',
		last: 'gibson' 
	},
	printGreeting: function() {
		console.log(`Hi my name is ${this.name.title} ${this.name.first} ${this.name.last}`);
	} 
};

const printData = () => {
	console.log(dataObj);
};


module.exports = {
	dataObj,
	printData
	
};