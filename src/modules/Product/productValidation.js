
import Joi from "joi";

// Product schema (productName, slug, priceAfterDiscount, finalPrice, image, category, stock)


export const addProductValidation =Joi.object({
    productName :Joi.string().min(3).max(15).required(),
    slug:Joi.string().required(),
    priceAfterDiscount:Joi.number().min(1).max(30000).required(),
    coupon:Joi.string().required(),
    userId:Joi.string().required(),
    image:Joi.string().required(),
    category:Joi.string().required(),
    stock:Joi.number().max(100).required()
})



export const updateProductValidation =Joi.object({
    productName :Joi.string().min(3).max(15).required(),
    slug:Joi.string().required(),
    priceAfterDiscount:Joi.number().min(1).max(50000).required(),
    coupon:Joi.string().required(),
    userId:Joi.string().required(),
    image:Joi.string().required(),
    category:Joi.string().required(),
    stock:Joi.number().max(100).required()
})