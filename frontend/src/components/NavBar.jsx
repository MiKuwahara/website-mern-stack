import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
   <header className="header">
     <nav className="nav">
                <a href="#" class="nav_logo">CodingLab</a>

                <ul class="nav_items">
                    <li class="nav_item">
                        <a href="#" class="nav_link">Home</a>
                        <a href="#" class="nav_link">Product</a>
                        <a href="#" class="nav_link">Services</a>
                        <a href="#" class="nav_link">Contact</a>
                    </li>
                </ul>

                 <Link to="/signup">
                    <button class="button">Sign Up</button>
                </Link> 
                
            </nav>
   </header>
  )
}

export default NavBar