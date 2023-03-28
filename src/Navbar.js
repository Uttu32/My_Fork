import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"
export default function Navbar(){
  return(

    <>
    <div className="Navigation" style={{display:"flex" ,gap:"2rem", textDecoration:"none" , height:"3rem",fontWeight:"700"}}>
    <h4>UI/UX Design</h4>
      <div className="navbar">
        <NavLink className="navabar"  to ='/'>Home</NavLink>
        <NavLink className="navabar"  to ='/About-us'>About Us</NavLink>
        <NavLink className="navabar"  to ='/Register'>Register</NavLink>
      </div>
    </div>
    </>
  )
}