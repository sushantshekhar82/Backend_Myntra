const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    productName: String,
    imageLink:String,
     category: String,
    rating: Number,
    price: Number,
    discount: Number,
    color: String,
    detail: String,
    brand: String,
})
const productModel=mongoose.model("product",productSchema)
module.exports={productModel}