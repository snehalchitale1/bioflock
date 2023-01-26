import React from 'react'
import './Navbar.css'
import {Link, useMatch , useResolvedPath} from "react-router-dom"

const Navbar = () => {
    
  return (
    <nav className='nav'> 
        <Link to='/' className='logo'> 
        GROUP-21 
        </Link>
        <ul>
                <CustomLink to="/">Home</CustomLink>
          
                <CustomLink to="/Admin">Admin</CustomLink>   
          
                <CustomLink to="/JoinUs">Join Us!</CustomLink>
        </ul>

    </nav>
  )
}

function CustomLink ({to,children, ...props }){
    const resolvedPath=useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
              {children}
            </Link>
        </li>
    )

}

export default Navbar;