import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import userRoute from "./routes/userRoute.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
/*app.use({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
});*/


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

