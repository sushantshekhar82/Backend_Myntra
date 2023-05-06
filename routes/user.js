const express=require("express")
const userModel = require("../model/user")
const bcrypt = require('bcrypt');
const user=express.Router()
var jwt = require("jsonwebtoken");

user.post("/register",async (req,res)=>{
    const {name,email,password}=req.body
    const alreadyuser=await userModel.findOne({email})
    if(alreadyuser){
        res.status(200).send({"msg":"already registered please login"})
    }else{
       bcrypt.hash(password,5,async(err,hash)=>{
       let users=new userModel({
        name:name,
        email:email,
        password:hash
       })
       await users.save()
       res.status(200).send({"msg":"Registred successfully"})

       }) 
    }
     
})
user.post("/login",async (req,res)=>{
    const {email,password}=req.body
    console.log("working1")
    let finduser=await userModel.findOne({email})
    console.log("working2",finduser)
    if(finduser){
        bcrypt.compare(password,finduser.password,async (err,result)=>{
            if(result){
                console.log("working3")
                res.status(200).send({
                    msg: "Login successful",
                    token: jwt.sign({ userId: finduser._id }, "masai"),//process.env.secretkey must put in .env(masai)
                  });
            }else{
                console.log("working4")
                res.status(200).send({
                    msg: "Wrong credential",
                  });
            }
        })
      
    }else{
        res.status(200).send({"msg":"user not found Register first"})
    }
})

user.get("/find", async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
   
   // const {token}=req.body
   const decoded = jwt.verify(token, "masai");//secret key in .env file
   console.log(decoded)
   if (decoded) {
     const data = await userModel.find({ _id: decoded.userId });
     console.log(data)
   res.status(200).send(data);
   } else {
     res.status(200).send("No user found Register first");
   }
 });

module.exports=user