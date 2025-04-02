import Joi from "joi";

// This Validates the user details before its saved
export const registerUserValidator = Joi.object({
    phone:
        Joi.string()
            .required()
            .messages({ 'any.required': 'Phone number is required.' }),

    email:
        Joi.string()
            .required(),

    password:
        Joi.string()
            .required(),

    confirmPassword:
        Joi.ref('password')
}).with('password', 'confirmPassword');