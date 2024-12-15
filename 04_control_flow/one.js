// if

// <, >, <=, >=, ==, !=, === (check data type), !==  


// const tem = 43

// if (tem === 43) { // condition need to be true for if statement to be run
//     console.log(`tem is 43 `);
    
// }
// else{
//     console.log(`tem is grater then 50`)
// }

// const score = 100

// if (score >50) {
//     let prower = "fly"
//     console.log(`user poweris: ${prower}`);
// }
// console.log(`user poweris: ${prower}`);



// **short hand notation
// const balance = 1000
//if (balance > 600) console.log("test"); // impleced scope

// if (balance > 600) console.log("test"), console.log("test2"); // should not do it like this

// if (balance < 500){
//     console.log("less than 500");
    
// } else if (balance < 800) {
//     console.log("less than 800");

// } if (balance < 1000) {
//     console.log("less than 1000");

// } else {
//     console.log("less than 1200");
// } 

const userLoggedIn = true
const dabitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && dabitCard && 2==3) {
    console.log("allow to perches.");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("allow");
    
}




