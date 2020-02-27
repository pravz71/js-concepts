let data = require('./data.js');
let dataObj = { ...data.dataObj }, printData = data.printData;

console.log('++++++++++TEST+++++++++++');
console.log(dataObj);
dataObj.name.first = "Pravin";
dataObj.email = "n@f.com";
console.log('+++++++++UPDATE++++++++++');
console.log(dataObj);
console.log('++++++++++DATA+++++++++++');
printData()