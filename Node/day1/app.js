//Non-blocking
console.log("Hi i am js");        //java script is single threaded
console.log("Hi i am js");
setTimeout(()=>{
    console.log("I am in set time out");
},2000);
console.log("Hi i am js");

//Blocking
// for(let i=0;i<=5e9;i++){           //if call stack emoty then another code will execute-->event loop blocking non-blocking

// };

console.log("Third");
console.log(1+ -1);
console.log(1+ +1);
console.log(1+ -'1');    //Unary negation


//v8-->parsing(checks syntax of code and code convert to machine language ) compiling(during compiling JIT )  execution   libubi(multithreading access to os file system )                   
//Request based system