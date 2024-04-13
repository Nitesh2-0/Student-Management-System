const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CRUDApplication").then(() => {
  console.log("Database is connected successfully.");
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mob: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  college: {
    type:String,
    require:true,
  },
  passingYear: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://photoaid.com/en/tools/_next/static/images/before-25ed01ce5b208e9df51888c519ef7949.webp",
  },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  course:{
    type:String,
    require:true,
  }
});
module.exports = mongoose.model("Users", userSchema);
