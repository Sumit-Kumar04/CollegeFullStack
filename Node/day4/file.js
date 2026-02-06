import  fs from  "fs";
import path from "path";     //it defines path  and no platform dependecies work windows mac linuz
// const path="index.js";     not work for all device
// const filepath =path.join("functions","function.js");
const filepath =path.join("functions","..","utils.js");
console.log(filepath);
//Relative path -->path from current      root path-->path from root     
//  absolute path-->
const absolutepath=path.resolve("filename")
//gives location of from root  

// const filedirectory=path.dirname("utils.js");
// const filedirectory=path.dirname("functions.js");
const filedirectory=path.dirname("functions/functions.js");

console.log("file Directory ->",filedirectory);

const fileExtension=path.extname("file.js");
const absoluteOutFolder=path.resolve("..","day3","fileSystem.js");
console.log("Path of absolute out folder",absoluteOutFolder);
console.log("file Extension is :",fileExtension);
fs.readFile(filepath,"utf-8",(err,content)=>{
    console.log("Content",content);
});
