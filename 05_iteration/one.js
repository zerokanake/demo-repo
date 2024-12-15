const arr =[1,2,3,4,5]

for (let k = 0; k < arr.length; ++k) {
    const element = arr[k];
    if (element ==5){
        // console.log(" 5 is here");
        
    }
    // console.log(element);    
}

for (let i = 0; i < 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j < 9; j++) {
        //console.log( `inner loop ${j} and inner loop ${i}`);
    }
        
    }

const myfav = ["Gojo", "Nanami", "Zen", "naruto", "Suske"]
for (let i = 0; i < myfav.length; i++) {
    const element = myfav[i];
    //console.log(element);
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log("Detected 5");
        
//         break
//     }
//     console.log(`value is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5");
        continue
    }
    console.log(`value is ${index}`);
}