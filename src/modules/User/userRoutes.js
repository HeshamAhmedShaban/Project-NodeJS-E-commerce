
import express from 'express'
import { SignupUser, VerifiedUser, deleteUser, resetPassword, signInUser, updateUser } from './controller/userController.js';
import { Validation } from '../../middlewire/Validation.js';
import { addUserSchema, resetPasswordValidation, signInValidation, updateUserValidation } from './userValidation.js';
import { auth } from '../../middlewire/auth.js';
import { isAdmin } from '../../middlewire/isAdmin.js';
let userRoutes =express.Router(); 

// Signup User
userRoutes.post("/user/signup",Validation(addUserSchema),SignupUser) 

// Signin User
userRoutes.post("/user/signin",Validation(signInValidation),signInUser)   

// Verifyed User
userRoutes.get("/user/verify/:token",VerifiedUser) 

// Reset password
userRoutes.post("/resetpassword/:userid",Validation(resetPasswordValidation),auth,isAdmin,resetPassword)

// Forgot Password

// Update User

userRoutes.put("/updateuser/:userid",Validation(updateUserValidation),auth,isAdmin,updateUser) 

// Delete User  // Deactivate user

userRoutes.delete("/deleteuser/:userid",auth,isAdmin,deleteUser) 

export default userRoutes; 

