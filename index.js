const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors')
require('dotenv').config()
const app=express()
const {product}=require("./routes/products")
const user = require("./routes/user")
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send("welcome")
})
app.use("/user",user)
app.use("/Product",product)


app.listen(process.env.port,async()=>{
    try {
       mongoose.connect(process.env.mongourl) 
    console.log("server running at port 8080")
    } catch (error) {
       console.log(error) 
    }
})