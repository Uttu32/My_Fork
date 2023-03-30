import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home';
import About from './Components/About';
import Game from './Components/Game';
import Login from './Components/Login';
import Register from './Components/Register';

import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}>
          {' '}
        </Route>

        <Route path="/about" element={<About />}>
          {' '}
        </Route>
        
        <Route path="/game" element={<Game />}>
          {' '}
        </Route>
        <Route path="/login" element={<Login />}>
          {' '}
        </Route>
        <Route path="/register" element={<Register />}>
          {' '}
        </Route>
      </Routes>
      {/* </Navbar> */}
    </div>
  );
}
