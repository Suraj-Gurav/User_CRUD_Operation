const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    fullName:String,
    emailId:String,
    password:String,
    mobileNo:String
});

module.exports = mongoose.model("user",userSchema);