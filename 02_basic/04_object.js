//singleton
//const tinder = new Object()


const tinder = {}

tinder.id = '23ed'
tinder.name = "maya"
tinder.isLoggedIn = false
tinder.age = 30

//console.log(tinder);

const regularUser = {
    email: "somebody@gamil.com",
    fullname: {
        userfullname: {
            firstname: "varlan",
            lastname: "abuse"

        }

    }

}

//console.log(regularUser.fullname.userfullname);


const obje1 = {1: "a", 2:"b"}
const obje2 = {3: "c", 4:"d"}
const obje4 = {5: "c", 6:"d"}

const obj3 = {...obje1, ...obje2}

//const obj3 = Object.assign({}, obje1, obje2, obje4) // to combine object
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "napal@gmail.com" 
    },
    {
        id: 1,
        email: "napal@gmail.com" 
    },
    {
        id: 1,
        email: "napal@gmail.com" 
    }
]

//console.log(user[0].email);

// console.log(Object.keys(tinder))
// console.log(Object.valus(tinder))
// console.log(Object.entries());

console.log(tinder.hasOwnProperty("isLoggedIn"));

