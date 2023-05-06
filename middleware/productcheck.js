const productcheck=(req,res,next)=>{
   const { productName,
    imageLink,
     category,
    rating,
    price,
    discount,
    color,
    detail,
    brand}=req.body
    if(!productName || !imageLink ||!category ||!rating || !price || !discount || !color || !detail || !brand){
        return res.status(400).send({"msg":"Enter all something is missing"})
    }
    next()
}
module.exports={productcheck}