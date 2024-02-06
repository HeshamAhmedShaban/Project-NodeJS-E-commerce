
import express from 'express'
import { addProduct, deleteProduct, getAllProducts, getProductByCategory, productPaginate, specificProduct, updateProduct } from './controller/productController.js';
import { auth } from '../../middlewire/auth.js';
import { isAdmin } from '../../middlewire/isAdmin.js';
import upload from '../../middlewire/upload.js';
import { Validation, ValidationFile } from '../../middlewire/Validation.js';
import { addProductValidation, updateProductValidation } from './productValidation.js';



let productRoutes =express.Router();

// Get All Products

productRoutes.get('/allproducts',auth,isAdmin,getAllProducts)

// Add Product

productRoutes.post('/addproduct',ValidationFile(addProductValidation),auth,isAdmin,upload.single('image'),addProduct)

// Update Product

productRoutes.put('/updateproduct/:productid',ValidationFile(updateProductValidation),auth,isAdmin,upload.single('image'),updateProduct) 

// Delete Product

productRoutes.delete('/deleteproduct/:productid',auth,isAdmin,deleteProduct)

//  Get all product with paginate

productRoutes.get('/productPaginate',auth,isAdmin,productPaginate) 

// Get specific product (By ID)

productRoutes.get('/product/:productid',auth,isAdmin,specificProduct)

// Get all product that in the same category

productRoutes.get('/category/:categoryid',auth,isAdmin,getProductByCategory)







export default productRoutes;