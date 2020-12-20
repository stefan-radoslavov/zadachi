const chars= (str)=>{
    let obj ={};
    for(let char of str)
    (!obj[char])?obj[char]=1:obj[char]++;
    console.log(Object.keys(obj).sort().reduce((accumulator, currentValue) => {
        accumulator[currentValue] = obj[currentValue];
        return accumulator;
      }, {}));

}
chars("python syntax is very pretty");


console.log("________________________");/*Zadacha 2 ==> */


const fs = require('fs');

let data = fs.readFileSync('json-file.json');
let rdata = JSON.parse(data);
console.log("Nested dict:",rdata);

const obj={rdata};

function flattenObj(value, currentKey) {
  let result = {};

  Object.keys(value).forEach(key => {

    const tempKey = currentKey ? `${key}` : key;

    if (typeof value[key] !== "object") {
      result[tempKey] = value[key];
    } else {
      result = { ...result, ...flattenObj(value[key], tempKey) };
    }
  });

  return result;
}

console.log("Flatten dict:",flattenObj(obj));