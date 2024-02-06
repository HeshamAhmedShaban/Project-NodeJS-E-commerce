

import mongoose from "mongoose";

//Coupon schema (couponCode, value, createdBy, updatedBy, deletedBy, expireIn)

const couponSchema = new mongoose.Schema({
    couponCode: { type: String, required: true },
    value: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref:"User",required: true },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref:"User",required: true  },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref:"User",required: true  },
    expireIn: { type: Date, expires: '2d', default: Date.now } 
},{
    timestamps:true,
});

const couponModel = mongoose.model('Coupon', couponSchema);

export default couponModel; 

