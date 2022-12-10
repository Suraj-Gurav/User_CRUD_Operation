const express=require("express");
const route=express.Router();

route.post("/",require("./../controller/user").createUser);
route.get("/",require("./../controller/user").getAllUser);
route.get("/:userId",require("./../controller/user").getUser);
route.put("/:userId",require("./../controller/user").updateUser);
route.delete("/:userId",require("./../controller/user").deleteUser);

module.exports=route;
