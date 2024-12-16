const myobject = {
    js: "JavaScript",
    cppp: "C++",
    rb: "rube",
    swift: "Swift by apple"
}

for (const key in myobject) { //for in loop give keys and for of loop give value
        console.log(`${key} shortcut for ${myobject[key]}`);
        
    }
