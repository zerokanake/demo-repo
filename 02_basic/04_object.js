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

//console.log(tinder.hasOwnProperty("isLoggedIn"));

// destructuring of mathod
const course = {
    courcename: "js turotial",
    courceprice: 100,
    courseInstroctor: "hites"

}

const {courceprice: price} = course //destructuring of mathod => {}. can also give name
console.log(price);


// api
{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }
