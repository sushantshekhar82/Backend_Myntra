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

module.exports=useraddress