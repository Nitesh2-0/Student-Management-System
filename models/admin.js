const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  mob:{
    type:String, 
    require:true
  },
  password:{
    type:String,
    require:true
  },
  adminId:{
    type:String, 
    require :true,
  },
  companyName:{
    type:String,
    default:"TIT Bhopal MP"
  },
  img:{
    type:String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPCWo4-gAswqsjrIIBtV3NcLJb25KoD74A15hn2qQSw&s"
  }
})

module.exports = mongoose.model('Admin',userSchema);