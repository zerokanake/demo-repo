const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const value = myNumber.map((num) => (num * 10) )
//console.log(value);

const myNums = []
myNumber.forEach( (num) => {
    myNums.push(num*10)
})
// console.log(myNums);


// Chain
const newNum = myNumber
            .map( (num) => num * 10 )
            .map( (num) => num + 1 ) //in the (num), the value will be the before mathod value: [10, 20, 30, ...] 
            .filter( (num) => (num >= 31)) // true and false er kaj hoy 
console.log(newNum);
