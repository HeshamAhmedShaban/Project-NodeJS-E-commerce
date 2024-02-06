

import mongoose from "mongoose";

//Cart schema (userId, totalPrice, priceAfterDiscount, products)

const cartSchema= new mongoose.Schema({
    userId:{type: mongoose.Types.ObjectId, ref:"User"},
    totalPrice:{type:Number,default:0},
    priceAfterDiscount:{type:Number,default:0},
    coupon:{type:mongoose.Types.ObjectId,ref:"Coupon",default:0},
    products:[{type: mongoose.Types.ObjectId, ref:"Product"}]
},
    {timestamps:true}
)


let cartModel = mongoose.model('Cart',cartSchema);

export default cartModel;

