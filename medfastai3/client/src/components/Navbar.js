import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for the navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/abstract">Abstract</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
