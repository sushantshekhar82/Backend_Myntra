const express=require('express')
const orderModel = require('../model/order')
const order=express.Router()

order.get("/:id",async(req,res)=>{
    const {id}=req.params
    try {
      const order=await orderModel.find({
        userId:id})
        
        res.status(200).send(order)
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
   

   
  })

order.post('/add',async(req,res)=>{
    const payload=req.body
        try {
          const userorder=new orderModel({
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
          
        const data=  await userorder.save()
         
          res.status(200).send({"msg":"post success","data":data})
        } catch (error) {
          res.status(400).send({"msg":error.message})
        }
       
      
})

module.exports=order