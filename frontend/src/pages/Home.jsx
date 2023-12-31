import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar.jsx';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


import {useSelector, useDispatch} from "react-redux"


import { login, reset} from "../features/auth/authSlice.js"



const Home = () => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
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

        const data = {
            email: email,
            password1: password1,
        };

        dispatch(login(data));
        /*
        axios
            .post("http://localhost:5555/user/login", data)
            .then((result) => {
                console.log("From home");
                console.log(result);
                if(result.data === "Success"){
                    navigate("/user");
                }else{
                    alert(result.data);
                    {/*navigate("/users/account")*//* }
                }
               
            })
            .catch((error) => {
                alert("An error happend. Please check console.");
                console.log(error);
            });
        */
    };


    return (
        <div>

            <div className="home">
                <div className="form_container">
                    {/* Login Form */}
                    <div className="form signup_form">
                        <form>
                            <h2>Login</h2>
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
                                    placeholder="Enter you password"
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)} />
                            </div>

                            <button className="button" onClick={handleSaveBook}>Login</button>
                            <div className="login_signup">Don't have an account? 
                                <Link to="/signup"> Sign Up</Link> 
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home