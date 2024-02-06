

import productModel from "../../../../DataBase/Model/ProductModel.js";

// Product schema (productName, slug, priceAfterDiscount, finalPrice, image, category, stock)

// Add Product
// export const addProduct = async(req,res)=>{
//     try{
//         let {productName,slug,priceAfterDiscount,coupon,userId,category,stock}=req.body;
        
//         let foundProduct = await productModel.findOne({productName:req.body.productName});
//         if(foundProduct) return res.json({message:"Product allredy founded"})
//         req.body.image=req.file.filename;
//         let addProduct = await productModel.insertMany(req.body)
//         res.json({Message:'Product Added',addProduct})
//     }
//     catch(error){
//         res.send({message:"ERROR",error})
//     }
    
// }

export const addProduct = async(req,res)=>{
    try{
        let {productName,slug,priceAfterDiscount,coupon,userId,category,stock}=req.body;
        let foundProduct = await productModel.findOne({productName:req.body.productName});
        if(foundProduct) return res.json({message:"Product allredy founded"})
        req.body.image=req.file.filename;
        // console.log(req.file , req.body);
        let newProduct =  productModel({
            productName,
            slug,
            priceAfterDiscount,
            coupon,
            userId,
            image:req.file.filename,   
            category,   
            stock
        })
        await newProduct.save();
        res.json({Message:'Product Added',newProduct})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
    
}




// Update Product

export const updateProduct = async (req, res) => {
    
    try{
        let {productName,slug,priceAfterDiscount,coupon,category,stock}=req.body;
        req.body.image = req.file.filename;
        let updateProduct= await productModel.findOneAndUpdate(
            {_id:req.params.productid},
            {productName,slug,priceAfterDiscount,coupon,image:req.file.filename,category,stock},
            {new:true}
        )
        // console.log(updateProduct);
        if(!updateProduct){
            return res.json({message:"Product Not Found"})
        }
        res.json({Message:'Product Updated',updateProduct})

    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}

// Delete Product
export const deleteProduct = async (req, res) => {
    let productId =req.params.productid
    try{
        let deleteProduct= await productModel.findByIdAndDelete(productId)
        if(!deleteProduct) return res.json({message:"Product Not Found"})

        res.json({Message:'Product Deleted',deleteProduct})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
} 



export const productPaginate = async (req,res)=>{
    let page = parseInt(req.query.page) || 1;
    let productPages = 5
    
    try{
        let products = await productModel.find().skip((page-1) * productPages ).limit( productPages )
        res.json({products})

    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}

// Get specific product   / Get product By Id
export const specificProduct = async (req,res)=>{
    let productId =req.params.productid
    try{
        let product = await productModel.findById(productId)
        if(!product){
            return res.json({message:"Product Not Found"})
        }
        res.json({message:"Product is ",product}) 
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}

// Get All Products

export const getAllProducts = async (req,res)=>{
    try{
        let products = await productModel.find();
        if(!products) return res.json({message:"Products not found"})
        
        res.json({message:"All Products",products})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}


// Get all product that in the same category

export const getProductByCategory = async (req,res)=>{
    let categoryid =req.params.categoryid
    try{
        let products = await productModel.find({category:categoryid})
        res.json({message:"Same Category ",products})
    }
    catch(error){
        res.send({message:"ERROR",error}) 
    }
}

