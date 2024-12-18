const  mynumber = [1, 2, 3]

// can be used in shopping cart
// const mytotal = mynumber.reduce(function (acc, currval) {
//     console.log(`accumilater : ${acc} and current value: ${currval}`);
//     return acc + currval
    
// }, 0 )

const mytotal= mynumber.reduce((acc, currval) => acc +currval, 0 )

//console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 100
    },
    {
        itemName: "python Course",
        price: 200
    },
    {
        itemName: "java Course",
        price: 100
    },
]

const totalPrice= shoppingCart.reduce( (i, item ) => i+ item.price, 0 )
console.log(totalPrice);
