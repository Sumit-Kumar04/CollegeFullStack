[
    "node",                                     //->execution
    "fileName",                                 //-->file modules name
    "add",
    "1",
    "2",

]
//Batch process 
const pr=process.argv[2];
const value1=process.argv[3];
const value2=process.argv[4];

// const [,,"add",1,2]=process.argv
// const {}=process

if(pr=="add"){
    console.log("Addition is",Number(value1)+Number(value2));
}
if(pr=="multi"){
    console.log("Addition is",Number(value1)*Number(value2));
}

