import React, {useState} from 'react'

import {NavLink,Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./Navbar.css"

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <Link to="/" className='title'>Homemadeliver</Link>
      <div className='menu' onClick={() =>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to = "/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/shop">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>    
          <li>
          <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
          <NavLink to="/login">login</NavLink>
          </li>
          <li>
          <NavLink to="/cart"><ShoppingCart size={30}/></NavLink> 
          </li>
          
      </ul>
    </nav>
  )
}
