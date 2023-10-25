import React, { useState }  from 'react'
import NavBar from '../components/NavBar.jsx';
import axios from "axios";


const Home = () => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSaveBook = () => {
        const data = {
            email,
            password1,
            password2,
        };

        axios
            .post("http://localhost:5555/user", data)
            .then(() => {
                alert("User Account successfully created!");
                {/*navigate("/users/account")*/}
            })
            .catch((error) => {
                alert("An error happend. Please check console.");
                console.log(error);
            });
    };


  return (
    <div>
        <NavBar />
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
                        <div className="login_signup">Already have an account? <a href="#" id="signup">Login</a></div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home