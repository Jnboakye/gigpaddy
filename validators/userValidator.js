import Joi from "joi";

export const registerUserValidator = Joi.object({
    phone: Joi.string().required().messages({ 'any.required': 'Phone number is required.' }),
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
}).with('password', 'confirmPassword');