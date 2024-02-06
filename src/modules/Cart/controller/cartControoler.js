
import cartModel from "../../../../DataBase/Model/cartModel.js";


// Cart schema (userId, totalPrice, priceAfterDiscount, products)


// Add Cart
export const addCart =async(req,res)=>{
    try{
        let {userId,totalPrice,priceAfterDiscount,coupon,products}=req.body;

        let foundCart = await cartModel.findOne({userId:req.body.userId});
        if(foundCart) return res.json({Message:'Cart already exist please wait to confirme first cart'})
        let addCart = await cartModel.insertMany({
            userId,
            totalPrice,
            priceAfterDiscount,
            coupon,
            products
        })
        res.json({Message:'Cart Added',addCart}) 
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}


// Update Cart

export const updateCart =async(req,res)=>{
        let {userId,totalPrice,priceAfterDiscount,coupon,products}=req.body;
    try{
        let updateCart = await cartModel.findByIdAndUpdate(
            {_id:req.params.cartid},
            {userId,totalPrice,priceAfterDiscount,coupon,products}
            ,{new:true}
        );
        if(!updateCart) return res.json({message:"Cart not found"})

        res.json({Message:'Cart Updated',updateCart}) 
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}

// Get All Carts

export const getAllCarts =async(req,res)=>{
    try{
        let allCarts = await cartModel.find();
        if(!allCarts) return res.json({message:"Cart not found"})

        res.json({Message:'All Carts',allCarts}) 
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}