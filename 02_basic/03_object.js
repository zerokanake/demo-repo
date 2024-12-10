//singleton
Object.create

// object literals (key value pair)
const mysim = Symbol("key1") // take symbol in object and use it

const jsUser= {
    name: "leuza",
    "full name": "leuza Akter",
    [mysim]:'mykey1',
    email: "leuza@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "saturday"]

}

// console.log(jsUser.name)
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysim]);

jsUser.email = "leuza@google.com"
// Object.freeze(jsUser)
jsUser.email = "leuza@null.com"
//console.log(jsUser);

jsUser.gretting = function(){
    console.log("Hello JS User"); 
}

jsUser.grettingtwo = function(){
    console.log(`Hello JS User, ${this.name}`); 
}

console.log(jsUser.gretting());
console.log(jsUser.grettingtwo());



