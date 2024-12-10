const myarr = [0, 1, 2, 3, 4, 5, 6]
const myarr2 = new Array("naruto, saitama, gokhu ")
//myarr.push(8)



//myarr.unshift(34)
//myarr.shift()

// console.log(myarr.includes(6));
// console.log(myarr.indexOf(45));


// console.log(myarr);



// slice, splice
console.log("A ", myarr);

const myN1 = myarr.slice(1, 4)
console.log(myN1);

console.log("B ", myarr);

const myN2 = myarr.splice(1, 4) // manipulate original array
console.log("C ", myarr);
console.log(myN2);


 


