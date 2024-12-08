const marvel_heros = ["ironman", "black panthor", "spoiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros) 
// console.log(typeof(marvel_heros));

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

const all_heros = [...marvel_heros, ...dc_heros] //spread operator to combine 2 array value
console.log(all_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(3) // need to provide the depth of the array
console.log(real_another_array);

console.log(Array.from('Inthemiddeleofthenight')); //make array
console.log(Array.from({song: 'Inthemiddeleofthenight'})); // need to mention what (keys, values) need to be made array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3));
