import React, { useState } from 'react'
import NavBar from '../components/NavBar.jsx';
import { Link } from "react-router-dom";
import axios from "axios";


const Home = () => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");

    const handleSaveBook = () => {



    };


    return (
        <div>
            <NavBar />
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