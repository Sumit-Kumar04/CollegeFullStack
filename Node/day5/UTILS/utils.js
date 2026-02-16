const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
// module.exports=add;                //it will work only if return only 1 function
module.exports={add,sub};

// If utils is in folder then the outer utils.json will work 
