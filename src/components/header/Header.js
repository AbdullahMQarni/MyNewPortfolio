import React, { useState } from 'react';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
        <h1>Abdullah Alqarni</h1>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <nav className={`${isMenuOpen ? 'open' : ''}`}>
            <ul>
                <li><a href='#About-Me'>About Me</a></li>
                <li><a href='#Portfolio'>Portfolio</a></li>
                <li><a href='#Lets-Work'>Lets Work</a></li>
            </ul>
        </nav>
        </header>
    );
}
