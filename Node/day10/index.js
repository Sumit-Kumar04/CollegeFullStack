const express=require("express");
const app=express();

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    const name="Sumit";

    const arr = [
        {
            name: "Ram",
            section: "E"
        },
        {
            name: "Shyam",
            section: "E"
        }
    ];
        res.render("main",{name,obj});
});

const webName="Unstop";
const work="internship";
 const msg="Made with love";
app.get("/header",(req,res)=>{
    
    res.render("header",{webName});
})
app.get("/body",(req,res)=>{
    
    res.render("body",{work});
})
app.get("/footer",(req,res)=>{
   
    res.render("footer",{msg});
})
app.get("/home",(req,res)=>{
   
    res.render("homePage",{webName,work,msg});
})


app.listen(3000,()=>{
    console.log("Server running");
});

//Client side rendering-->in the browser all renderinghappens
//server side rendering--> in the server  
//ejs(embedded java script)
//Status codes
//401-->
//403