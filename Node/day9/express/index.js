const express = require('express');
const app = express();

//Routes
const userRoutes = require('./routes/userRoutes');

app.get('/', (req, res) => {
    res.send("Hellow from backend side");
})

//MiddleWares
app.use(express.json())
const customMiddleWare = (req,res,next)=>{
    console.log("Custom MiddleWare 1");
    next();
}

const customMiddleWare1 = (req,res,next)=>{
    console.log("Custom MiddleWare 2");
    next();
}

app.use(customMiddleWare);
app.use(customMiddleWare1);

//Route MiddleWares
app.use('/', userRoutes);


app.listen(3000, (err) => {
    console.log("Server is runnuing on 3000!");

})


//MINI Project --
// 1- GET/students
// 2- GET/students/:id
// 3- POST/students
// 4- DELETE/students/:id