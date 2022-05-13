const express = require("express");
const router = express.Router();
const Notes = require("../models/notesModel")



router.post("/", async (req,res)=>{
    try {       
        const newNote = await Notes.create({
            NoteTitle:req.body.NoteTitle,
            NoteBody:req.body.NoteBody,
        });
        console.log(newNote);
        res.status(400).send(newNote);
      }
      catch(err) {
        if(error.name==='ValidationError'){
            res.status(400).send(error.message);
      }else{
          console.log(error);
          res.status(404).send("something went wrong please try fill fields again");
      }
      }
})

router.get("/", async (req, res) => {
    try{
      const geNotes = await User.find();
      res.status(400).send(geNotes);
    }
    catch(err)
    {
        console.log(err);
        res.status(404).send("something went wrong please try again");
    }
  });


module.exports = router;