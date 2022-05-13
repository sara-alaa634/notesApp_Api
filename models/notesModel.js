const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
  NoteTitle: { type: String, match: /^[a-zA-Z ]*$/,maxlength: 50 }, 
  NoteBody: { type: String, match: /^[a-zA-Z ]*$/,maxlength: 50 }, 
  NoteDate:  { type: Date , default: Date.now}
}); 

module.exports=mongoose.model('NotesAPP', notesSchema);