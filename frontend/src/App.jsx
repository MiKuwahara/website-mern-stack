import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from './components/NavBar.jsx';
import "./App.css";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default App