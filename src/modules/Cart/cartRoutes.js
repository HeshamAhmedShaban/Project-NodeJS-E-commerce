
import express from 'express'
import { auth } from '../../middlewire/auth.js';
import { isAdmin } from '../../middlewire/isAdmin.js';
import { addCart, getAllCarts, updateCart } from './controller/cartControoler.js';
import { Validation } from '../../middlewire/Validation.js';
import { addCartValidation, updateCartValidation } from './cartValidation.js';

let cartRoutes=express.Router();

// Add Cart

cartRoutes.post("/addcart",Validation(addCartValidation),auth,addCart)

// Update cart

cartRoutes.put("/updatecart/:cartid",Validation(updateCartValidation),auth,isAdmin,updateCart)

// Get All Carts

cartRoutes.get("/allcarts",auth,isAdmin,getAllCarts)









export default cartRoutes;
