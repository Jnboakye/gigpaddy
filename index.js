import express from "express";
import userRouter from "./routes/usersRoute.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();



// create an express app
const app = express();
app.use(express.json());

// make a database connection
await mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("databse connected")
}).catch((error) => {
    console.log(error)
});

// Use middlewares

// Use routes
app.use('/api/v1', userRouter)

// Listen for incoming requests
const port = 7500;

app.listen(port, () => {
    console.log(`Server is listinening on port ${port}`)
})

