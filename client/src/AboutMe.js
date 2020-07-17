import React from 'react'
import Machu from './images-icons/photos/machu.jpg';

function AboutMe(props) {
    return (
        <div id='main-container'>
            <div id='body'>
                <h3 id='content-home'> Peruvian loving Vermont! </h3>
                <div>
                    <p id='p-home'> Originally I am from Lima, Peru - I've been living in Vermont for about 8 years now. I learned about The University of Vermont while attending my fouth year in Architecture at the Pontificia Universidad Catolica del Peru - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                    <p id='p-home'> Originally I am from Lima, Peru - I've been living in Vermont for about 8 years now. I learned about The University of Vermont while attending my fouth year in Architecture at the Pontificia Universidad Catolica del Peru - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                </div>
            </div>
            <div id='sidebar'>
                <h3 id='h3-sidebar'> Would you like to know more about Peru?</h3>
                <div>
                    <h4>You would love MachuPicchu... and the llamas!</h4>
                    <p>If you ever visit Peru, don't miss Machu Picchu, one of the most important and fascinating Inca citadels, built in the 15th century</p>
                    <img src={Machu} />
                    <img src={Machu} />
                </div>
            </div>
        </div>
    )

}

export default AboutMe