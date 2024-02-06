

import couponModel from "../../../../DataBase/Model/CouponModel.js";

// Coupon schema (couponCode, value, createdBy, updatedBy, deletedBy, expireIn)

// Add Coupon

export const addCoupon = async(req,res)=>{
    try{
        let {couponCode,value}=req.body;

        let foundCoupon = await couponModel.findOne({couponCode:req.body.couponCode});

        if(foundCoupon) return res.json({messahe:"Coupon allredy founded"})

        let addCoupon = await couponModel.insertMany({
            couponCode,
            value,
            createdBy:req.user.id,
            updatedBy:req.user.id,
            deletedBy:req.user.id
        })
        res.json({Message:'Coupon Added',addCoupon})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
    
}

// Update Coupon

export const updateCoupon = async (req,res)=>{
    let {couponCode,value}=req.body;
try{
    let updateCoupon = await couponModel.findOneAndUpdate(
        {_id:req.params.couponid},
        {couponCode,value},
        {new:true}
    )
    if(!updateCoupon) return res.json({message:"Coupon not found"})

    res.json({Message:'Coupon Updated',updateCoupon})
}
catch(error){
    res.send({message:"ERROR",error})
}

}

// Delete Coupon

export const deleteCoupon = async (req,res)=>{
    let couponId = req.params.couponid
    try{
        let deleteCoupon = await couponModel.findOneAndDelete(couponId)
        if(!deleteCoupon) return res.json({message:"Coupon not found"})

        res.json({Message:'Coupon Deleted',deleteCoupon})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}

// Get All Coupons

export const getAllCoupons = async (req,res)=>{
    try{
        let coupons = await couponModel.find()
        if(!coupons) return res.json({message:"Coupon not found"})
        res.json({message:"All Coupons",coupons})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}