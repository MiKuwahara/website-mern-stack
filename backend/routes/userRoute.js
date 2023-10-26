import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// route for Creating a new User
router.post("/", async (request, response) => {
    try {

        // Please provide all info
        if(
            !request.body.email ||
            !request.body.password1 ||
            !request.body.password2
        ){
            return response.status(400).send({
                message: "Send all required fields: email, password1, password2"
            });
        };

        /* Check for email duplicacy
        const isEmailExist = await User.findOne({email: request.body.email});
        if(isEmailExist)
        {
            return response.status(400).send({
                message: "Email already exist."
            });
        };
        */ 
        // Otherwise create user account
        const newUser = {
            email: request.body.email,
            password1: request.body.password1,
            password2: request.body.password2,
        };

        const user = await User.create(newUser);
        return response.status(201).send(user);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Getting ALL Users from the database
router.get("/", async (request, response) => {
    try {

        const users = await User.find({});
        return response.status(200).json({
            count: users.length,
            data: users
        });

    } catch (error) {
       console.log(error.message);
       response.status(500).send({message: error.message}); 
    }
});

// Route for Getting ONE User using ID
router.get("/:id", async (request, response) => {
    try {
        
        const { id } = request.params;
        const user = await User.findById(id);

        return response.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Updating User
router.put("/:id", async (request, response) => {
    try {

        // Please provide all info
        if(
            !request.body.email ||
            !request.body.password1 ||
            !request.body.password2
        ){
            return response.status(400).send({
                message: "Send all required fields: email, password1, pwassword2",
            });
        };

        // Otherwise update ...
        const {id} = request.params;
        const result = await User.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).send({message: "User not found"});
        };

        return response.status(200).send({message: "Book updated successfully"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});
// Route for Deleting User
router.delete("/:id", async (request, response) => {
    try {
        const {id} = request.params;
        const result = await User.findByIdAndDelete(id);

        if(!result){
            return response.status(404).send({message: "User not found"});
        }

        return response.status(200).send({message: "User deleted successfully"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});
export default router;