import React from "react";
import "./index.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home.js"
import Aboutus from "./About-us.js"
import Register from "./Register.js"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About-us" element={<Aboutus />} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
  );
}
