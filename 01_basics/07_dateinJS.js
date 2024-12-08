let myDate = new Date()

// console.log(myDate.getDate());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

//let creatDate = new Date(2024, 11, 12, 6, 30)
let creatDate = new Date("12-12-2024")
// console.log(creatDate.toString());
// console.log(creatDate.toDateString());
// console.log(creatDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(creatDate.getTime());

console.log(Math.floor(Date.now()/1000)) //to convert into sec

let newDate = new Date()

newDate.toLocaleString("default",{
    weekday: "long"
}
)

console.log(newDate);





