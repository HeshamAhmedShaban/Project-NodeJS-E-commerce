
import Joi from "joi";

//User schema (userName, email, password (hashed), role, isVerfied, Adressed 

export  const addUserSchema =Joi.object({
    userName :Joi.string().min(4).max(15).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','eg'] } }),
    password:Joi.string().required(),
    role:Joi.string().required(),
    isVerfied:Joi.boolean(),
    address:Joi.array().required() 
})

export const signInValidation = Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','eg'] } }),
    password:Joi.string().required()
})


export const resetPasswordValidation = Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','eg'] } }),
    password:Joi.string().required()
})


export const updateUserValidation = Joi.object({
    userName :Joi.string().min(4).max(15).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','eg'] } }),
    password:Joi.string().required(),
    role:Joi.string().required(),
    isVerfied:Joi.boolean(),
    address:Joi.array().required()
})




