import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true
        },
        password1: {
            type: String,
            required: true,
        },
        password2: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);