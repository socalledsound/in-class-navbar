import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/shopping">shopping</Link>
        </div>
     );
}
 
export default Navbar;
