import React from 'react'
import Machu from './images-icons/photos/machu.jpg';

function AboutMe(props) {
    return (
        <div id='main-container'>
            <div id='body'>
                <h3 id='h3-about'> Peruvian loving Vermont! </h3>
                <div id='content-home'>
                    <p> Originally I am from Lima, Peru - I've been living in Vermont for about 8 years now. I learned about The University of Vermont while attending my fouth year in Architecture at the Pontificia Universidad Catolica del Peru</p>
                    <p> Originally I am from Lima, Peru - I've been living in Vermont for about 8 years now. I learned about The University of Vermont while attending my fouth year in Architecture at the Pontificia Universidad Catolica del Peru</p>
                </div>
            </div>
            <div id='sidebar'>
                <div id='sidebar-content'>
                    <h3 id='h3-sidebar'> Have you ever visited Peru?</h3>
                    <h4>You would love MachuPicchu... and the llamas!</h4>
                    <p>If you ever visit Peru, don't miss Machu Picchu, one of the most important and fascinating Inca citadels, built in the 15th century.</p>
                </div>
                <div id='sidebar-image-container'>
                    <img id='image-sidebar' src={Machu} />
                    <img id='image-sidebar' src={Machu} />
                </div>
            </div>
        </div>
    )

}

export default AboutMe