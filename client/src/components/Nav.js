import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <nav className="navbar">
            <h4>My Quotes </h4>
        <div>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/comments">Reflections</NavLink>  
            </div>
        </div>
        </nav>
    )
}

export default Nav
