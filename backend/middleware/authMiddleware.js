// this function runs during the request and response cycle

import jwt from "jsonwebtoken";
import {User} from "../models/userModel.js";
import { JWT_SECRET } from "../config.js";

const protect = async (request, response, next) => {

    try {

        let token;

        if (request.headers.authorization &&
            request.headers.authorization.startsWith("Bearer")) {
            try {
                // Get token from header
                token = request.headers.authorization.split(" ")[1];

                // Verify token
                const decoded = jwt.verify(token, JWT_SECRET);

                // Get user from the token
                request.user = await User.findById(decoded.id);

                next();
            } catch (error) {   // Throw error i.e. incorrect token
                console.log(error);
                response.status(401);
                throw new Error("Not authorized");
            }
        }

        if(!token) {    // No token
            response.status(401);
            throw new Error("Not authorized, no token")
        }

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

};

export {
    protect
};