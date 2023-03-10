import React, { useState } from 'react';
import './navbar.css';

// Router
import { NavLink, Outlet } from 'react-router-dom';

// Image
import Logo from './../../img/nav/logo-nav.png';

// Icon
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

// Components
import Footer from '../footer/Footer';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <nav>
                <div className="logo-brand">
                    <img src={Logo} alt="" />
                </div>

                <div className="nav-menu" id={toggle ? "active" : ""}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/team">Our Team</NavLink>
                    <NavLink to="/career">Career</NavLink>
                    <NavLink to="/partnership">Partnership</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>

                <div className="burgers" onClick={handleToggle}>
                    {toggle ? <FiX /> : <FiMenu />}
                </div>
            </nav>
            <Outlet />
            <Footer/>
        </>
    )
}

export default Navbar;