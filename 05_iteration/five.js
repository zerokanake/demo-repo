 const coding = ["python", "js", "cpp","ruby"]
 coding.forEach( function (item) {
    //console.log(item);
    
 } )

//  const char = ["aim", "sleep", "lamda","dog"]
//  char.forEach( (ita) => console.log(ita)) //arry function

// function cod(item) {
//     console.log(item);
// }
// coding.forEach( cod )

coding.forEach( (item, index, arra) => {
    //console.log(item, index, arra);
    
} )

const mycoding = [
    {
        languageName: "javascript",
        languageFileType: "js"
    },
    {
        languageName: "python",
        languageFileType: "py"
    },
    {
        languageName: "java",
        languageFileType: "java"
    },
]

mycoding.forEach( function (params) {
    console.log(params.languageName);
    
})
