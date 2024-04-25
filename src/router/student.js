const express = require("express");

const router = new express.Router();

const Student = require("../models/students");

router.get("/thapa",(req , res)=>
{
        res.send("whats up guys");
       
})


   router.post("/students" , async (req,res) =>
   {
       try {
   
           const user = new Student(req.body)
           const createUser = await user.save();
           res.status(201).send(createUser);
           
       } catch (error) {
           
           res.status(404).send(error);
       }
       
   })
   
   //read the  data of registerd student
   router.get("/students", async(req,res) =>
   {
       try {
   
           const studentData = await Student.find();
           res.send(studentData);
           
       } catch (error) {
   
           res.status(500).send(error);
           
       }
   })
   
   
   //individual data
   
   router.get("/students/:id" , async (req , res)=>
   {
       try {
   
           const _id = req.params.id;
           const studentData = await Student.findById({_id : _id});
           if(!studentData)
           {
               res.status(404).send();
           }
           else
           {
               res.send(studentData);
           }
           
       } catch (error) {
   
           res.send(error);
           
       }
   })
   
   //update data by its id
   router.patch("/students/:id", async(req,res)=>
   {
       try {
   
           const _id = req.params.id ;
           const updateStudent = await Student.findByIdAndUpdate(_id , req.body)
           res.status(200).send(updateStudent);
           
       } catch (error) {
           res.status(404).send(updateStudent);
       }
   })
   
   //delete data by its id
   
   router.delete("/students/:id",async (req , res)=>
   {
       try {
   
           const id = req.params.id ;
           const deleteData = await Student.findByIdAndDelete(id);
           if(!req.params.id)
           {
               return res.status(400).send();
           }
   
           res.send(deleteData);
           
       } catch (error) {
           res.status(500).send(error);
       }
   
   })
   

module.exports = router;