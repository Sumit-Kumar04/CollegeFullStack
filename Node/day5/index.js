//this will not works it need destructuring
// const add=require("./utils");
// const sub=require("./utils");

// const {addition,subtraction}=require("./UTILS/utils");       //this is right,but module.exports need to return combine if want to work it collectively
const {add}=require('./UTILS/utils');
// const {add,sub}=require("./utils") ;  // Destructuring
let a=8;
let b=6;
console.log(add(a,b));
// console.log(subtraction(a,b));

//Chache-->temporary memory(meta data of function)    works for requre statement

const funInpage2=require("./newFIle");
funInpage2();

//__dirname
//__filename    