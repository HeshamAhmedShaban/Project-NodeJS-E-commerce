
import Joi from "joi";

// Cart schema (userId, totalPrice, priceAfterDiscount, products)

export const addCartValidation =Joi.object({
    userId :Joi.string().required(),
    totalPrice:Joi.number().min(1).max(50000).required(),
    priceAfterDiscount:Joi.number().min(1).max(50000).required(),
    coupon:Joi.string().required(),
    products:Joi.array().required()
})


export const updateCartValidation =Joi.object({
    userId :Joi.string().required(),
    totalPrice:Joi.number().min(1).max(50000).required(),
    priceAfterDiscount:Joi.number().min(1).max(50000).required(),
    coupon:Joi.string().required(),
    products:Joi.array().required()
})