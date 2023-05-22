const express=require('express');
const addressModel = require('../model/address');
const useraddress=express.Router();

useraddress.get('/:id',async(req,res)=>{
    const {id}=req.params
    try {
      const useraddressdata=await addressModel.find({
        userId:id})
        res.status(200).send(useraddressdata)
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
   
    
})

useraddress.post('/add',async(req,res)=>{
    const payload=req.body;
    try {
        const addaddress=await addressModel(payload)
    await addaddress.save()
    res.status(200).send("address saved successfully")
        
    } catch (error) {
        res.status(400).send(error.message) 
    }
    

})


useraddress.delete("/deleteaddress/:id",async(req,res)=>{
    const {id}=req.params
    try {
      await addressModel.findByIdAndDelete({_id:id})
      res.status(200).send({"msg":"Delete Successfully"})
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }

  })

  useraddress.patch("/updateaddress/:id",async(req,res)=>{
    const {id}=req.params
    const payload=req.body
    try {
      await addressModel.findByIdAndUpdate({_id:id},payload)
      res.status(200).send({"msg":"update successfully"})
    } catch (error) {
      res.status(400).send({"msg":error.message}) 
    }
  })

module.exports=useraddress