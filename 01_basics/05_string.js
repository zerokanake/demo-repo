const helo =  "hello" +" world "
const repo = 58

//console.log(helo + repo);

let name = " leuza "
const age = 29
console.log(`Hello My name is ${name} and I am ${age} old`);

const gameName = new String("leugolou-jdjfn") // key value pair [0: 'l', 1:'e', ..]

console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('u'));
console.log(gameName.replace("e","k"));

const newString = gameName.substring(2, 6)

console.log(newString);
console.log(gameName.split("o", 2));

const anotherString = gameName.slice(8, -1) 
console.log(anotherString);

const newStringOne = "     the one     "
console.log(newStringOne);
console.log(newStringOne.trim());






