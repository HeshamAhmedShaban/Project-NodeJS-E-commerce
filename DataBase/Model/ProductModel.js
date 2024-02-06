
import mongoose from "mongoose";

// Product schema (productName, slug, priceAfterDiscount, finalPrice, image, category, stock)

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    slug: { type: String,required: true,unique: true},
    priceAfterDiscount: { type: Number, required: true },
    coupon: { type: mongoose.Types.ObjectId,ref:"Coupon", },
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true},
    image: { type: String, required: true },
    category: { type: mongoose.Types.ObjectId,ref:"Category", required: true },
    stock: { type:String, required: true, min:0},  
},{
    timestamps:true,
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;

