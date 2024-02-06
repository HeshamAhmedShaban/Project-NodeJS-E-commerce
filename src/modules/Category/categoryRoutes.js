

import express from 'express'
import { auth } from '../../middlewire/auth.js';
import { isAdmin } from '../../middlewire/isAdmin.js';
import { addCategory, deleteCategory, getAllCategorys, getCategoryById, updateCategory } from './controller/categoryController.js';
import upload from '../../middlewire/upload.js';
import {ValidationFile} from '../../middlewire/Validation.js';
import { addCategoryValidation, updateCategoryValidation } from './categoryValidation.js';
let categoryRoutes =express.Router();

// Add Category

categoryRoutes.post('/addcategory',ValidationFile(addCategoryValidation),auth,isAdmin,upload.single('image'),addCategory)


// Update Category 

categoryRoutes.put('/updatecategory/:categoryid',ValidationFile(updateCategoryValidation),auth,isAdmin,upload.single('image'),updateCategory)

// Delete Category

categoryRoutes.delete('/deletecategory/:categoryid',auth,isAdmin,deleteCategory)

// Get All Categorys

categoryRoutes.get('/allcategorys',auth,isAdmin,getAllCategorys)

// Get specific category   / Get Category By Id

categoryRoutes.get('/getcategory/:categoryid',auth,isAdmin,getCategoryById)


export default categoryRoutes;
