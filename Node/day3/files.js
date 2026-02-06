// const add=require("./utils");       //common method    can change name of add 
// import functionName from "Path"
import multiply, {add} from "./utils.js"         //export default and    name default
const ot=add(2,3);
console.log(ot);
const m=multiply(2,3);
console.log(m);

//sub folder path
import {divide} from "./folder/divide.js";
const d=divide(4,2);
console.log(d);

import readFile from "./fileSystem.js";

readFile();