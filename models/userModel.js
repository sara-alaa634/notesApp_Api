const mongoose = require('mongoose');
const { Schema } = mongoose;

// name: { type: String, validate: /[a-z]/ }

const userSchema = new Schema({
  Firstname: { type: String, match: /^[a-zA-Z ]*$/,maxlength: 50 }, 
  Lastname: { type: String, match: /^[a-zA-Z ]*$/,maxlength: 50 },
  Email: { type: String, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],unique:true },
  Password: { type: String,unique:true }
 // Password: { type: String,maxlength: 50 }
}); 

module.exports=mongoose.model('users', userSchema);