import React from 'react';
import './Header.css';
import {link} from 'react-router-dom';

function Header() {
    return (
    
        <div className="header">
        
        <ul>
        <li><h2>UBER Pets</h2></li>
        <li><a href="default.asp">Home</a></li>
        <li><a href="about.asp">About</a></li>
        <li><a href="contact.asp">Contact</a></li>
        </ul>
        
        
        </div>
        
    )
}


export default Header;