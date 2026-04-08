const mongoose=require('mongoose');
const connectDb=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/fullstack').then(()=>{
    console.log("MongoDb connected");
}).catch(err=>{
    console.log(err);
})
};

module.exports=connectDb;