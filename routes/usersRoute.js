import { Router } from "express";
import { registerUser } from "../controllers/usersController.js";

// Creating user router
const userRouter = Router();

// Defining the user routes

userRouter.post('/users/signup', registerUser)


// exporting router 
export default userRouter;