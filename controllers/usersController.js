import { UserModel } from "../models/userModel.js";


// Register User
export const registerUser = async (req, res) => {
    // Get user profile
    try {
        const { firstName, lastName, phone, email, password, } = req.body;
        // Validate user information

        // Check if user does not exist already
        const existingUser = await UserModel.findOne({
            $or: [{ phone }, { email }]
        });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash plaintext password


        // Create user record in database
        const newUser = new UserModel({
            firstName,
            lastName,
            phone,
            email,
            password,
        });

        // Save user in database
        await newUser.save();

        // Generate access token

        // Send registration Text message or or E-mail

        // Return response
        res.status(201).json({
            message: "User created successfully",
            data: newUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });

    }

    // console.log("new user created");


}

// export const loginterUser = (req, res) => {

// }

// export const UpadteRegisteredUser = (req, res) => {

// }