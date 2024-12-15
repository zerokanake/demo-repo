const userEmail = []

if (userEmail){
    console.log("got user email");
    
} else{
    console.log("didn't got user email")
}


//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value: "0", "false", " ", {}, [], function(){}


if (userEmail.length === 0){
    console.log("array is emty ");
    
}  

const myObject = {}

if (Object.keys(myObject).length ===0 ) {
    
}

// Nullish Coalescing operator (??): null, undifined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 11 // it handel null or undifined with finction/object

console.log(val1);


// Terniary operator (if else small sentex)
//condition ? true : false

const iceteaPrice = 90
iceteaPrice <= 80 ? console.log("less than 80") : console.log(" more than 80")
