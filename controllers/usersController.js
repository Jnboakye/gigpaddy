

export const registerUser = (req, res) => {
    // Validate user information

    // Check if user does not exist already

    // Hash plaintext password

    // Create user record in database
    const newUser = ({
        phone: value.phone,
        email: value.email,
        password: value
    })

    // Save user in database

    // Generate access token

    // Send registration Text message or or E-mail

    // Return response
    res.status(201).json({
        message: "User created successfully",
        data: newUser
    });

}

export const loginterUser = (req, res) => {

}

export const UpadteRegisteredUser = (req, res) => {

}