const express=require ("express");
const { cartModel } = require("../model/cart");
const orderModel = require("../model/order");
  const cart=express.Router()

  cart.get("/:id",async(req,res)=>{
    const {id}=req.params
    try {
      const cart=await cartModel.find({
        userId:id})
        
        res.status(200).send(cart)
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
   

   
  })

  cart.post("/addcart",async(req,res)=>{
    const {_id,productName,imageLink,category,rating,price,discount,color,detail,brand,size,quantity}=req.body
    try {
      const cartproduct=new cartModel({
        product_id:_id,
    productName: productName,
    imageLink:imageLink,
     category: category,
    rating: rating,
    price: price,
    discount: discount,
    color: color,
    detail: detail,
    brand: brand,
    size:size,
    quantity:quantity,
    userId:req.body.userId
      })
      console.log(req.body,req.body)
    const data=  await cartproduct.save()
      console.log(req.body,cartproduct)
      res.status(200).send({"msg":"post success","data":data})
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
   
  })

  cart.delete("/deletecart/:id",async(req,res)=>{
    const {id}=req.params
    try {
     const data= await cartModel.findByIdAndDelete({_id:id})
      res.status(200).send({"msg":"Delete Successfully","data":data})
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }

  })
  cart.delete("/deleteall/:id",async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try {
      
     const data= await cartModel.deleteMany({userId:id})
     console.log(data)
      res.status(200).send({"msg":"Delete Successfully","data":data})
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }

  })

  cart.patch("/updateqty/:id",async(req,res)=>{
    const {id}=req.params
    const payload=req.body
    try {
      const data= await cartModel.findByIdAndUpdate({_id:id},payload)
      res.status(200).send({"msg":"update successfully","data":data})
    } catch (error) {
      res.status(400).send({"msg":error.message}) 
    }
  })

  module.exports={cart}