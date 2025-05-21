import React, { useState, useEffect, useRef } from 'react';
import '../assets/style/Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-toggle')) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div
                className={`menu-toggle ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-expanded={isOpen}
            >
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`} ref={menuRef}>
                <ul className="nav-links">
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/About_us" onClick={closeMenu}>About Us</Link></li>
                    <li><Link to="/Services" onClick={closeMenu}>Services</Link></li>
                    <li><Link to="/Projects" onClick={closeMenu}>Projects</Link></li>
                    <li><Link to="/Contact_us" onClick={closeMenu}>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;