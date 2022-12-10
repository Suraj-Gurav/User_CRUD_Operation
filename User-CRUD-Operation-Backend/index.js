//Express Server
const express=require("express");
const app=express();
const PORT=6001;
const cors=require('cors');
app.use(express.json());
app.use(cors());

//import route
app.use("/user",require("./Routes/user"));


//db connection to Server file declearation
const conn=require("./db");
conn.connection.on("connected",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected to database");
    }
});

app.listen(PORT,()=>{
    console.log("Server is start");
});





