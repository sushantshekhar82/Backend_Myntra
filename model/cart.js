const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    product_id:String,
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
    userId:String
    
})

const cartModel=mongoose.model('cart',cartSchema)
module.exports={cartModel}