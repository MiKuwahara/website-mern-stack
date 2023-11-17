import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../features/auth/authSlice';
import "../App.css";

const NavBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)
  const { id } = useParams();

  const onLogout = () => {
    dispatch(logout()); // delete in localStorage
    dispatch(reset()); // reset state back to initial values
    console.log("logout")
    navigate("/");
    console.log("logout2")
  };

  /*
  useEffect(() => {
    console.log({ id });
  }, []);
*/
    

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" class="nav_logo">MERN</a>

        <ul class="nav_items">
          <li class="nav_item">
            <a href="#" class="nav_link">Home</a>
            <a href="#" class="nav_link">Product</a>
            <a href="#" class="nav_link">Services</a>
            <a href="#" class="nav_link">Contact</a>
          </li>
        </ul>

        {user ? (
          <button class="button" onClick={onLogout}>Log Out</button>

        ) : (
          <div className="login-signup-btn">
            <Link to="/">
              <button class="button login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button class="button">Sign Up</button>
            </Link>
          </div>
        )}

      </nav>
    </header>
  )
}

export default NavBar