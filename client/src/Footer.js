import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from './images-icons/footerlink-home.png'
import Email from './images-icons/footerlink-email.png'
import Phone from './images-icons/footerlink-phone.png'
import LinkedIn from './images-icons/footerlink-linkedin.png'
import Instagram from './images-icons/footerlink-instagram.png'

function Footer(props) {
    return (
        <div id='footer'>
            <div id='footer-info'>
                <div id='contact'>
                    <Link to='/contact-me'><p>Contact Me</p></Link>
                </div>
                <div id='page-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/about-me'>About Me</Link>
                    <Link to='/interests'>Interests</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/work-history'>Work History</Link>
                </div>
                <div id='copyright'>
                    <p>Copyright© 2020, Mila Carranza. All rights reserved.</p>
                </div>
            </div>
            <div id='contact-info'>
                {/* <h3>Certifications</h3> */}
                <p id='connect'>Let's connect!</p>
                <div id='social-links'>
                    <div><img className='footer-image' src={HomeImage} />  Colchester, VT</div>
                    <div><img className='footer-image' src={Email} />  milagro.fcl@gmail.com</div>
                    <div><img className='footer-image' src={Phone} />  (802) 430-3098</div>
                    <div><img className='footer-image' src={LinkedIn} /> <a href='https://www.linkedin.com/in/milagro-de-fatima-carranza-9668869a/'>LinkedIn</a></div>
                    <div><img className='footer-image' src={Instagram} /> <a href='https://www.instagram.com/fatita.carranza/'>Instagram</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer