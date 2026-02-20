//V-8 ENGINE   

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


//v8-->parsing(checks syntax of code and code convert to machine language ) compiling(during compiling JIT(jUST IN TIME COMPILATION) )  execution   libubi(multithreading access to os file system )                   
//Request based system


//js single threades
//node--> multithreaded
//Request driven-->processed by server 
//Event driven system-->completion 
//call stack
//call back queue event loop
//micro macro task
//call back function
//call back  hell
//promise  ->success failure pending 
//try catch 
//then 
//chaining
//Package 

//node  package json
//dependency dev_dependency
//dependencies version-->major.minor.patch           ^ ~
//utils same file name cotact

//module.exports=func          default common js
//module.exports={name,name2}         name common js
//eport varName  //exac anem in inmport
//eport  default varName  //can change name
