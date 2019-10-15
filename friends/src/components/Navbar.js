import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div className = 'navbar'>
            <ul>
            <ul>
        <li>
        <Link to='/login'>Log In</Link>
        </li>
        <li>
          <Link to='friends'>My Friends</Link>
        </li>
        </ul>
            </ul>
        </div>
    )
}