const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
var bcrypt = require('bcryptjs');


router.post("/", async (req,res)=>{
    try {       
        const hash=bcrypt.hashSync(req.body.Password,10);
        const newUser = await User.create({
            Firstname:req.body.Firstname,
            Lastname:req.body.Lastname,
            Email:req.body.Email,
            Password:hash
        });
        console.log(newUser);
        res.status(200).send(newUser);
      }
      catch(error) {
          //ValidatorError
        if(error.name==='ValidationError'){
            res.status(400).send(error.message);
      }else{
          console.log(error);
         // res.status(404).send("something went wrong please try fill fields again");
           res.send(error);
      }
         
      }
})


router.get("/", async (req, res) => {
  try{
    const getUser = await User.find();
    res.status(400).send(getUser);
  }
  catch(err)
  {
      console.log(err);
      res.status(404).send("something went wrong please try again");
  }
});


module.exports = router;