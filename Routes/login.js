const express = require("express");
const router = express.Router();
const userModel= require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt= require("bcryptjs");





router.post("/",async (req,res)=>{
    const user=await userModel.findOne({
        where:{
            Email:req.body.Email
        },
    });

    try { 
              
       if(await bcrypt.compareSync(req.body.Password,user.Password)){
         const token = jwt.sign({ Email:user.Email,Password:user.Password,Firstname:user.Firstname },'shhhhh' ) ;
         res.send(token); 
       } 
         else{
            res.send("error");
         }
      }
      catch(error) {
       
      }
    // if(bcrypt.compareSync(req.body.Password,user.Password)){
    //     const token = jwt.sign({ Email:user.Email,Password:user.Password },'shhhhh' ) ;
    //     res.send(token);
    // }else{
    //     res.send("not login");
    // }
});



module.exports= router;

