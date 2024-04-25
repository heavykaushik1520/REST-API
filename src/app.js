const express = require("express");

const app = express();

const port = process.env.PORT || 3005 ;

require("./db/conn");

const Student = require("./models/students");

const studentRouter = require("./router/student"); 

app.use(express.json()); // incoming request object should be in josn format

// app.get("/",(req , res) =>
// {
//     res.send("This is GET method");
// })

// app.post("/students" , (req,res)=>
// {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user
//     .save()
//     .then(()=>
//     {
//         res.status(201).send(user);
//     })
//     .catch((err)=>
//     {
//         console.status(400).log(err);
//     }); //=> tp save on database

//    // res.send("Hello from the other side");
// })


// 1: create new router

//    const router = new express.Router();
//2 : we need to define router

//    router.get("/thapa",(req , res)=>
//    {
//         res.send("whats up guys");
       
//    })

// 3 : we need to register router

app.use(studentRouter);

app.listen(port , ()=>
{
    console.log(`listening to port ${port}`);
})