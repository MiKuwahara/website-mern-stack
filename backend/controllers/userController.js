import { model } from "mongoose";


const loginUser = (req, res) => {
    res.json({message: "Login user"});
};


const registerUser = (req, res) => {
    res.json({Message: "Register user"});
};



// You can only have one default export per file.
// However, if you want to export more, then use
// named exports which you declare without the "default"
export  {
    registerUser,
    loginUser
};