import React, { useState } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
        <h1><Link className='Link' to='/'>Abdullah Alqarni</Link></h1>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <nav className={`${isMenuOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to='/aboutme'>About Me</Link></li>
                <li><a href='#Portfolio'>Portfolio</a></li>
                <li><a href='#Lets-Work'>Lets Work</a></li>
            </ul>
        </nav>
        </header>
    );
}
