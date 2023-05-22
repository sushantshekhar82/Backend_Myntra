const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    productName: String,
    imageLink:String,
     category: String,
    rating: Number,
    price: Number,
    discount: Number,
    color: String,
    detail: String,
    brand: String,
    size:String,
    quantity:Number,
    status:String,
    userId:String
})
const orderModel=mongoose.model('order',orderSchema)
module.exports=orderModel