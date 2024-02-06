
import bcrypt from 'bcrypt' 
import Jwt from "jsonwebtoken";
import userModel from '../../../../DataBase/Model/UserModel.js';
import SendEmail from '../../../services/sendEmail.js';

//User schema (userName, email, password (hashed), role, isVerfied, Adressed 


// Signup User
export const SignupUser = async(req,res)=>{
    try{
        let { userName, email, password,role, isVerfied,address } =req.body;

        let foundUser = await userModel.findOne({email:req.body.email});

        if(foundUser) return res.json({Message:'User Alredy Register'});

        let hashedPassword =bcrypt.hashSync(password, 10);

        let addUser =await userModel.insertMany({
            userName,
            email,  
            password:hashedPassword,
            role,
            isVerfied,
            address
        })
        let token =Jwt.sign({id:addUser[0]._id, role:addUser.role},"newUser")
        let url=`http://localhost:7000/user/verify/${token}`;
        SendEmail(email,url)
        res.json({Message:'User Added',addUser})  

    }catch(error){
        res.send({message:"ERROR",error})
    }
}


// Sign in User
export const signInUser =async(req,res)=>{
    try{
        let {email,password}=req.body;
        let foundUser= await userModel.findOne({email})
        // console.log(foundUser);
        if(!foundUser) return res.json({Message:'User Need SignUp First'})
        let matchedPassword=bcrypt.compareSync(password,foundUser.password);
        if(matchedPassword){
            let token =Jwt.sign({id:foundUser._id , role:foundUser.role},'projectNode') 
            res.json({Message:'Welcome',token})
        }
        else{ 
            res.json({Message:"Invalid Password"})
        }
    }catch(error){
        res.send({message:"ERROR",error})
    } 
}

// Verifyed User

export const VerifiedUser =async(req,res)=>{
    try{
        let {token} = req.params;
        Jwt.verify(token,"newUser",async(err,decoded)=>{
            let foundUser =await userModel.findById(decoded.id);
            if(!foundUser) return res.json({Message:"Invalid user"})
            let updateUser = await userModel.findByIdAndUpdate(decoded.id,{isVerfied:true},{new:true});
            res.json({message:"Hello From Verified",updateUser})
        })
    }catch(error){
        res.send({message:"ERROR",error})
    }   
}


// Reset password

export const resetPassword = async(req,res)=>{
        let {password,email}=req.body;
    try{
        let foundUser= await userModel.findOne({email})
        if(!foundUser) return res.json({Message:'User Need SignUp First'})
        let hashedPassword =bcrypt.hashSync(password, 10);
        let updateUser= await userModel.findOneAndUpdate(
            {_id:req.params.userid},
            {password:hashedPassword},
            {new:true}
        )
            res.json({message:"Update Password", updateUser})

    }   
    catch(error){
        res.send({message:"ERROR",error})
    } 
}



// Forget password



// Update User

export const updateUser = async(req,res)=>{
    let { userName, email, password,role, isVerfied,address } =req.body;
    try{
        let hashedPassword =bcrypt.hashSync(password, 10);
        let updateUser= await userModel.findOneAndUpdate(
            {_id:req.params.userid},
            {userName,email,
                password:hashedPassword,
                role,isVerfied,address}, 
            {new:true}
        )
        if(!updateUser){
            return res.json({message:"User Not Found"})
        }
        res.json({Message:'User Updated',updateUser})

    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}   


// Delete User

export const deleteUser = async(req,res)=>{  
    try{
        let userId = req.params.userid;
        let deleteUser = await userModel.findOneAndDelete({_id:userId})
        if(!deleteUser) return res.json({message:"User Not Found"})
        res.json({Message:'User Deleted',deleteUser})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}