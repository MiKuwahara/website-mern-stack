import React from 'react'
//import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import User from "./pages/User.jsx";
import NavBar from "./components/NavBar.jsx"
import "./App.css";


const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<Home />} />
      </Routes>
      </Router>
    </>
  )
}

export default App