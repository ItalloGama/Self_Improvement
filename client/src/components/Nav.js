import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar">
            <h4>My Quotes </h4>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quotes">myLog</NavLink>  
            {/* <NavLink to="/comments">myComments</NavLink> */}
        </div>
        </nav>
    )
}

export default Nav
