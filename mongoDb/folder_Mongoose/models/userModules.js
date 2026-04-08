const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    course: String,
    skills: [String],
    address: {
        city: String,
        pincode: Number
    },
    isActive: Boolean,
    marks: [
        {
            subject: String,
            Score: Number
        }
    ]
});

//User-->users
const User=mongoose.model("User",userSchema);
// const User=mongoose.model("User",{},"myUsers");
module.exports=User;
