import express from "express";
import userRouter from "./routes/usersRoute.js";

// create an express app
const app = express();

// make a database connection

// Use middlewares

// Use routes
app.use('api/v1', userRouter)

// Listen for incoming requests
const port = 5000;

app.listen(port, () => {
    console.log(`Server is listinening on port ${port}`)
})

