import { Schema, model } from "mongoose";

const userSchema = new Schema({
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true }
},
    {
        timestamps: true
    });

userSchema.set("toJSON", {
    transform: (document, returned0bject) => {
        returned0bject.id = returned0bject._id.toString()
        delete returned0bject._id
        delete returned0bject.__v
    }
})

export const userModel = model("user", userSchema);

