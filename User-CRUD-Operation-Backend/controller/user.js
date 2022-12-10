const userModel=require("./../module/user");

//Add user to database
exports.createUser= async(req,res)=>{
    const data=await new userModel(req.body).save();
    res.json(data);
};

//Alldata fing tp database
exports.getAllUser= async(req,res)=>{
    const data=await userModel.find();
    res.json(data);
};

//find user by Id
exports.getUser=async (req,res)=>{
    try{
        const data=await userModel.find({_id:req.params.userId});
        res.json(data);
    }catch(err){
        res.json(err);
    }
};

//Update user 
exports.updateUser=(req,res)=>{
    userModel.findByIdAndUpdate({_id:req.params.userId},req.body,{new:true},(err,data)=>{
        if(err){
            res.json(err);       
        }else{
            res.json(data);
        }
    });
};

//delete user
exports.deleteUser=(req,res)=>{
   userModel.findByIdAndDelete({_id:req.params.userId},(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data);
        }
    });
};