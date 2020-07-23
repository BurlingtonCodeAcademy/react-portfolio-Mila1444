import React from 'react'
import { Link } from 'react-router-dom'


function Header(props) {

    return (
        <div id='header'>
            <Link to='/'><p id="name">Mila Carranza, Junior Developer & Digital Marketer.</p></Link>
            <div id='header-links'>
                <Link to='/'>Home</Link>
                <Link to='/about-me'>About Me</Link>
                <Link to='/interests'>Interests</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/work-history'>Work History</Link>
                <Link to='/contact-me'>Contact Me</Link>
            </div>
        </div>
    )

}

export default Header