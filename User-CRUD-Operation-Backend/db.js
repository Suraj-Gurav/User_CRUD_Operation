const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/backend");
module.exports=mongoose;
