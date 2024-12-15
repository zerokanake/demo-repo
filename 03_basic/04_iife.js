// Immediaty Invoked Function Expressinos (IIFE)

(function connection(){
    //named iife
    console.log(`DB connected`);
    
}) (); //1st '()' is for function defination. 2nd '()' is for exsicution

(function  name() { // use iife: globle scope polution can create problem some time, to remove this problem we use iife
    console.log(`I am leuza`);
    
}) (); // need to end contex bt using ;

((name) => {
    console.log(`DB connected two ${name}`);
    
}) ("leuza")