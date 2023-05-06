const express=require("express")
const { productModel } = require("../model/products")
const { productcheck } = require("../middleware/productcheck")

const product=express.Router()
product.get("/",async (req,res)=>{
    let {page,limit,sort}=req.query
    if(page<1){
        page=1
    }
    if(!limit){
        limit=10
    }
    let obj={}
    if(sort){
        obj.category=sort
    }
  try {
    const product=await productModel.find(obj).skip((page-1)*limit).limit(limit)
    const totalproduct=await productModel.countDocuments()
    res.status(200).send({product,totalproduct})
  } catch (error) {
    res.status(400).send({ msg: error })
  }
})
product.get("/:id",async (req,res)=>{
    const {id}=req.params
   try {
    const product = await productModel.findOne({ _id: id })
    res.status(200).send(product)
   } catch (error) {
    res.status(400).send({ msg: error })
   }
})

product.post("/add",async(req,res)=>{
   
    try {
        const product=new productModel(req.body)
    await product.save()
    res.status(200).send({msg:"product is added"})
    } catch (error) {
        res.status(400).send({ msg: error })
    }
    
})

module.exports={product}