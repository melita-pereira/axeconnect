import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="../assets/logo.png" alt="AxeConnect Logo" className="logo" />
                <span className="brand-name">AxeConnect</span>
            </div>
            <ul className="navbar-right">
                <li>
                    <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/notices" className={({ isActive }) => isActive ? "active" : ""}>Notices</NavLink>
                </li>
                <li>
                    <NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>Events</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => isActive ? "active login-link" : "login-link"}>Login/Signup</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;