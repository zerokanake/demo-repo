const user ={
    username: "leuza akter", // mathod name change in future
    price: 999,

    wecomemassage: function(){
        console.log(`${this.username} , welcome to website`); //this: to refer current context      
        // console.log(this); // give current varialbes
        
    }

     
}
// user.wecomemassage()

// user.username= "sam"
// user.wecomemassage()

//console.log(this); // will give emty object, but inthe browsers consol this will show window global object


// function chai() {
//     username: "leuza"
//     console.log(this.username); // we can not use this.username inside a function
// }

// chai()



// const chai = function () {
//     username: "leuza"
//     console.log(this.username); // we can not use this.username inside a function
// }

// chai()


// arrow function
const chai =  () => {
    username: "leuza"
    //console.log(this); // we can not use this.username inside a function
}

chai()

// const addtwonum = (num1, num2) => {
//     return num1 + num2
// }

// const addtwonum = (num1, num2) => num1 + num2

//impleside return
// const addtwonum = (num1, num2) => (num1 + num2) // in "{}" we have to return, in "()" we dont have to return

const addtwonum = (num1, num2) => ({username: "leuza",
    age:29
})

console.log(addtwonum.());
