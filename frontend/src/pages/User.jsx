import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar.jsx';
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import axios from "axios";


const User = () => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();

    const {user} = useSelector((state) => state.auth);

    useEffect(() => {
        if(!user){
            navigate("/user")
        }
    }, [user, navigate]);
    /*
    const handleSaveBook = () => {


        // Password are case sensitive
        if (password1.localeCompare(password2) != 0) {
            return alert("Passwords are not the same!");

        }


        const data = {
            email: email,
            password1: password1,
            password2: password2,
        };

        axios
            .post("http://localhost:5555/user", data)
            .then(() => {
                //console.log("User Account successfully created!");
                navigate("/user");
            })
            .catch((error) => {
                alert("An error happend. Please check console.");
                console.log(error);
            });
    };

    */
    return (
        <div>
            {/*<NavBar />*/}
            <div className="home">
               <div className="user">
                <h1>Welcome {user && user.email}!</h1>
               </div>
            </div>
        </div>
    )
}

export default User