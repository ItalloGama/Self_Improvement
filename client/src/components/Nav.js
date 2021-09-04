import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h4>My Quotes </h4>
        <div className="navBar">
            <br/>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/comments">Reflections</NavLink>  
            </div>
            <br/>
        </div>
        </nav>
    )
}

export default Nav
