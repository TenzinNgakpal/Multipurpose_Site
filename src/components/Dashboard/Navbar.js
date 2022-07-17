import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return ( 
            
            <nav className="nav">
                <Link to="/" className="site-title">Elden</Link>
                <ul>
                    <Link className="nav-links" to="/home"> <li> Home </li> </Link>
                    <Link className="nav-links" to="/about"> <li> About </li> </Link>
                    <Link className="nav-links" to="/tools"> <li> Tools </li> </Link>
                    <Link className="nav-links" to="/games"> <li> Games </li> </Link>
                    <Link className="nav-links" to="/contact-us"> <li> Contact Us </li> </Link>
                </ul>
                
            </nav>
        )
    }
}

export default Navbar;