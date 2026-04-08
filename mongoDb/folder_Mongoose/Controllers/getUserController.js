const User=require("../models/userModules.js");

// const getUser=async(name)=>{
    
//     const user=await User.findOne({name:name});
//     return user;
// }
const getUser=async(id)=>{
    
    const user=await User.findOne({_id:id});
    return user;
}

module.exports=getUser;