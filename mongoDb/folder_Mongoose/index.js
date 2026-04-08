const express=require("express");
const app=express();

const connectDb=require("./db");
connectDb();

// const getUser=async()=>{
//     const users= await User.find();
//     console.log(users);
// }

// getUser();
const getUser=require("./Controllers/getUserController");
const addUser=require("./Controllers/getUserController");

app.get("/user/:name",async(req,res)=>{
    const name=req.params.name;
    const user=await getUser(name);
    res.send(user);
})
app.get("/user/id/:id",async(req,res)=>{
    const name=req.params.id;
    const user=await getUser(id);
    res.send(user);
})
app.post("/user/add",async(req,res)=>{
     const userData=req.body;

        const user=await addUser(userData);
        res.send(user);
})

app.get("/",(req,res)=>{
    res.send("Working home");
})

app.listen(3000,()=>{
    console.log("Server Running");
})