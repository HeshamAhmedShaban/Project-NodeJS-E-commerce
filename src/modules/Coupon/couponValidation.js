
import Joi from "joi";

// Coupon schema (couponCode, value, createdBy, updatedBy, deletedBy, expireIn)


export const addCategoryValidation =Joi.object({
    couponCode :Joi.string().alphanum().min(3).max(15).required(),
    value:Joi.number().min(1).max(1000).required()
})

export const updateCategoryValidation =Joi.object({
    couponCode :Joi.string().alphanum().min(3).max(15).required(),
    value:Joi.number().min(1).max(1000).required()
})