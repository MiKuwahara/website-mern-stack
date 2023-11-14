//import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";


//  @desc       Authenticate a user
//  @route      POST 
//  @access     Public
const registerUser = async (request, response) => {
    const {email, password1, password2} = request.body;

    try {

        // Please provide all info
        if(
            !email || !password1 || !password2
        ){
            response.status(400)
            throw new Error("Please add all fields")
        };

        // Check if user exists
        const userExists = await User.findOne({email});

        if(userExists){
            response.status(400)
            throw new Error("user already exists")
        }

        // Hash password
        const salt = await bcrypt.genSalt(10) // 10 is the default
        const hashedPassword = await bcrypt.hash(password1, salt)

        // Create user
        const user = await User.create({
            email: email,
            password1: hashedPassword,
            password2: password2
        });

        if(user)
        {
            response.status(201).send(user);
        }else{
            response.status(400)
            throw new Error("Invalid user data")
        }

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
};

//  @desc       Authenticate a user
//  @route      POST 
//  @access     Public
const loginUser = async (request, response) => {

    const {email, password1, password2} = request.body;

    try {
        // Check for user email
        const user = await User.findOne({email});

        // if user exists and password sent is the same as in the database
        // then login
        if(user && (await bcrypt.compare(password1, user.password1))){
            response.send(user)
        }else{
            response.status(400)
            throw new Error("Invalid credentials!")
        }

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
    
};

// You can only have one default export per file.
// However, if you want to export more, then use
// named exports which you declare without the "default"
export  {
    registerUser,
    loginUser
};