const balance = new Number(200)
// console.log(balance);
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); 

const otherNumber = 154.8679
// console.log(otherNumber.toPrecision(4));
 
const oneNumber = 1000000
// console.log(oneNumber.toLocaleString());
// console.log(oneNumber.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++  maths ++++++++++++++++++++++++++

console.log(Math.abs(-7)); // give positive value
console.log(Math.round(4.3)); // provide integre number
console.log(Math.ceil(4.2)); // max integre number
console.log(Math.floor(4.8)); // min integre number
console.log(Math.pow(2,4));

console.log((Math.random()*10) +1 ); //in the case of 0.0342
console.log(Math.floor(Math.random()*10) +1 ); 

const max = 100
const min = 50

console.log(Math.floor(Math.random() *(max - min + 1)) + min)
