const express=require('express')
const order=express.Router()

order.get('/',(req,res)=>{
    res.status(200).send("welcome to order")
})

order.post('/add',(req,res)=>{
    
})

module.exports=order