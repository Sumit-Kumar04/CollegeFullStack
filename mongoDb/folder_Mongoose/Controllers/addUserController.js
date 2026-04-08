const User=require("../models/userModules.js");
const addUser=async(user)=>{
    const newUser=await User.create(user);
    return newUser;
}
module.exports=addUser;