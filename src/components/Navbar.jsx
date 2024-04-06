import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/Chatbot"><li>Chatbot</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/helpful_resources"><li>Resource</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/FAQs"><li>FAQs</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
