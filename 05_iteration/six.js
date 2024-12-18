//const coding = ["Js", "python", "ruby", "java"]

// const value = coding.forEach( (code) => { // do not return values
//     console.log(code);
//     return code
    
// })
// console.log(value.code);

const myNumber = [1, 2,3,4,5,6,7,8,9,10]

//const value = myNumber.filter( (num) => num > 4 ) // filter return value
//console.log(value);

// const value= myNumber.filter( (num) => { // "{}" curly braces use korle return likha lagbe because of the scope
//     return num > 4
// } )
// console.log(value);

// const mychar = ["a","b","c","d","e"]

// const value = mychar.filter( (c) => {
//     return c <= "c"
// })
// console.log(value);

const newnum = []
myNumber.forEach( (n) => {
    if(n > 4){
        newnum.push(n)
    }
})
//console.log(newnum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  
let userbook = books.filter((tit) => tit.genre == "Fiction")
userbook = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre === "History"} )
console.log(userbook);


