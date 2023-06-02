const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors')
require('dotenv').config()
const app=express()
const {product}=require("./routes/products")
const user = require("./routes/user")
const auth=require("./middleware/auth")
const { cart } = require("./routes/cart")
const useraddress = require("./routes/address")
const order = require("./routes/order")
app.use(express.json())
app.use(cors({ origin: ['https://myntracloneproject.vercel.app','https://myntrawebproject.netlify.app','http://localhost:3000'], optionsSuccessStatus: 200 }));

app.options("*", cors({ origin: ['https://myntracloneproject.vercel.app','https://myntrawebproject.netlify.app','http://localhost:3000'], optionsSuccessStatus: 200 }));


app.get("/",(req,res)=>{
    res.status(200).send("welcome")
})
app.use("/user",user)
app.use("/Product",product)
app.use(auth)
app.use("/cart",cart)
app.use("/address",useraddress)
app.use('/order',order)

app.listen(process.env.port,async()=>{
    try {
       mongoose.connect(process.env.mongourl) 
    console.log("server running at port 8080")
    } catch (error) {
       console.log(error) 
    }
})