
import mongoose from "mongoose";

//User schema (userName, email, password (hashed), role, isVerfied, Adressed (user may have more that one address) ).

const userSchema =new mongoose.Schema({
    userName: { type:String, required:true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    isVerify: { type:Boolean,default:false},
    address: [{ type: String }],
},{
    timestamps:true,
})

const userModel = mongoose.model('User',userSchema);

export default userModel;

