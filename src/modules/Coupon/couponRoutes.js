

import express from 'express'
import { auth } from '../../middlewire/auth.js';
import { isAdmin } from '../../middlewire/isAdmin.js';
import { addCoupon, deleteCoupon, getAllCoupons, updateCoupon } from './controller/couponController.js';
import { Validation } from '../../middlewire/Validation.js';
import { addCategoryValidation, updateCategoryValidation } from './couponValidation.js';

let couponRoutes = express.Router();


// Add Coupon

couponRoutes.post('/addcoupon',Validation(addCategoryValidation),auth,isAdmin,addCoupon)

// Update Coupon

couponRoutes.put('/updatecoupon/:couponid',Validation(updateCategoryValidation),auth,isAdmin,updateCoupon)

// Delete Coupon

couponRoutes.delete('/deletecoupon/:couponid',auth,isAdmin,deleteCoupon)

// Get All Coupons

couponRoutes.get('/getallcoupons',auth,isAdmin,getAllCoupons)
















export default couponRoutes;