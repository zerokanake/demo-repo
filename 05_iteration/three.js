// for of loop

//["","",""]
//[{},{},{}]

let arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num); 
}
let speech = "The moon is mooning tonight"
for (const i of speech) {
    //console.log(`${speech.length} ${speech}`);
}

const map = new Map()
map.set("BD", "Bangladesh")
map.set("USA", "United State of Amarica")
map.set("Uk", "Unated kindom")
// console.log(typeof(map.keys()));
 for (const [keys, value] of map) {
    console.log(keys, "==", value);
    
 }

