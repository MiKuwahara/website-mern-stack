import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import userRoute from "./routes/userRoute.js";
import mongoose from "mongoose";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use("/user", userRoute);

mongoose.connect(MONGODB_URL)
.then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () =>{
        console.log(`App is listening to port: ${PORT}`)
    });
})
.catch((error)=> {
    console.log(error)
});

