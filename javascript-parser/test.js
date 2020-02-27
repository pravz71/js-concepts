let data = require('./data.js');
let dataJSON = JSON.stringify(data.dataObj), printData = data.printData;
let dataObj = JSON.parse(dataJSON), dataObjOg = data.dataObj;

console.log('++++++++++TEST+++++++++++');
console.log(dataObj);
dataObj.name.first = "Pravin";
dataObjOg.name.last = "Gupta";
console.log('+++++++++UPDATE++++++++++');
console.log(dataObj);
console.log('++++++++++DATA+++++++++++');
printData()