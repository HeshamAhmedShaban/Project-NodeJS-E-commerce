

import Joi from "joi";


export const addCategoryValidation =Joi.object({
    categoryName :Joi.string().min(4).max(15).required(),
    image:Joi.string().required()
})

export const updateCategoryValidation =Joi.object({
    categoryName :Joi.string().alphanum().min(5).max(15).required(),
    image:Joi.string().required()
})