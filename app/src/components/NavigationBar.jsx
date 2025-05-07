import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthStore from '../Store/AuthStore';

const NavigationBar = () => {
    const navigate=useNavigate();
    const setToken = AuthStore((state) => state.setToken);


  return (
    <>
    <nav style={{ position:"fixed", top:"0px",display: "flex", justifyContent: "space-between", padding:"10px", alignItems: 'flex-start',height: "100px",  backgroundColor: "purple",}}>
    <ul style={{display:"flex",listStyle:"none"}}>
        <li style={{padding:"10px"}}>
            <NavLink to="/">Home</NavLink>
        </li>
        <li style={{padding:"10px"}}>
        <NavLink to="/register">Register</NavLink>
        </li>
        <li style={{padding:"10px"}}>
        <NavLink to="/login">Login</NavLink>
        </li>
        <li style={{padding:"10px"}}>
        <NavLink to="/about">About</NavLink>
        </li>
        <li style={{padding:"10px"}} >
        <button onClick={setToken(null)}>Logout</button>
        </li>

        
       
    </ul>
    </nav>
    </>
  )
}

export default NavigationBar