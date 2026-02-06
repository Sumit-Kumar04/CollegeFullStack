import os from "os";
console.log("os",os.platform());     //platform name
console.log("os architecture",os.arch());      //platform architecture 32 bit 64 bit
console.log("bits is :",os.freemem()/(1024**3));    //gives free memory in ram
const freeMemory=os.freemem();
