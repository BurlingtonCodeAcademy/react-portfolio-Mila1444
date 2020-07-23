import React from 'react'
import Machu from './images-icons/photos/machu.jpg';
import Llama from './images-icons/photos/llama.jpg';

function AboutMe(props) {
    return (
        <div id='main-container'>
            <div id='body'>
                <div id='content-home'>
                    <h3 id='h3-about'>Something about Mila...</h3>
                    <p>I've been living in Vermont for about 8 years now, but I am originally from Lima, Peru. I first learned about The University of Vermont while attending college in Peru, through a student exchange program and decided to get a bachelor's degree in Economics.</p>
                    <p>A year later, I went back to UVM, but this time to get my master's degree in Business Administration. I was part of a whole new MBA program,and in 2015, I graduated from the first SEMBA - Sustainable Entrepreneurship MBA - cohort!</p>
                </div>
            </div>
            <div id='sidebar'>
                <div id='sidebar-content'>
                    <h4 id='h4-sidebar'> Have you ever visited Peru?</h4>
                    <h5>You would love MachuPicchu... and the llamas!</h5>
                    <p>If you ever visit Peru, don't miss Machu Picchu, one of the most important and fascinating Inca citadels, built in the 15th century.</p>
                    <img id='image-sidebar' src={Machu} />
                    <img id='image-sidebar' src={Llama} />
                </div>
            </div>
        </div>
    )

}

export default AboutMe