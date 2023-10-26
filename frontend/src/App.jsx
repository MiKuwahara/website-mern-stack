import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import "./App.css";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App