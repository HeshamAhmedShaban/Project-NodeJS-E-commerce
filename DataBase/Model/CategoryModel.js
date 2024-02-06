

import mongoose from "mongoose";

// Category schema (categoryName, image, createdBy)

const categorySchema = new mongoose.Schema({
    categoryName:{type:"string", required:true},
    image:{type:"string", required:true},
    createdBy:{ type: mongoose.Schema.Types.ObjectId,ref:"User"}
},{
    timestamps:true,
});

const categoryModel = mongoose.model('Category', categorySchema);

export default categoryModel;