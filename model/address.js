const mongoose=require('mongoose')

const addressSchema=mongoose.Schema({
    name:String,
    mobile:Number,
    address:String,
    state:String,
    userId:String
})

const addressModel=mongoose.model('address',addressSchema);
module.exports=addressModel;