import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import NavBar from '../components/NavBar.jsx';
import { Link, useNavigate } from "react-router-dom";
import { register, reset} from "../features/auth/authSlice.js"
import axios from "axios";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    // execute when any of the dependencies changes
    useEffect(() => {
        if(isError){
            return alert(message);
        }

        if(isSuccess || user){
            navigate("/");
        }

        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const handleSaveBook = () => {
        // prevent from clearing out inputs on form?
        //e.preventDefault()

        // Password are case sensitive
        if (password1.localeCompare(password2) != 0) {
            return alert("Passwords are not the same!");

        }else{
            const data = {
                email: email,
                password1: password1,
                password2: password2,
            };
    
            dispatch(register(data));
        }


        
        /*
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
        */
    };


    return (
        <div>
           { /*<NavBar />*/}
            <div className="home">
                <div className="form_container">
                    {/* Sign Up Form */}
                    <div className="form signup_form">
                        <form>
                            <h2>Sign Up</h2>
                            <div className="input_box">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="input_box">
                                <input
                                    type="password"
                                    placeholder="Create password"
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)} />
                            </div>

                            <div className="input_box">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)} />
                            </div>

                            <button className="button" onClick={handleSaveBook}>Sign Up</button>
                            <div className="login_signup">Already have an account?
                                <Link to="/user"> Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp