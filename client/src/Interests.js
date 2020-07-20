import React from 'react'
import Mexico from './images-icons/photos/mexico.JPG';
import Golden from './images-icons/photos/golden.jpg';
import Hawaii from './images-icons/photos/hawaii.jpg';
// import Quebec from './images-icons/photos/quebec.JPG';

function Interests(props) {
    return (
        <div id='main-container'>
            <div id='body'>
                <div id='content-home'>
                    <h3 id='h3-about'> Interests</h3>
                    <p>I love spending as much time as I can outdoors! I love hiking, biking and going lake. But one of my biggest passions is to travel.</p>
                    <p>This page is still a work in progress ... </p>
                </div>
            </div>
            <div id='sidebar'>
                <h4 id='h4-sidebar'>Some of the places I visited</h4>
                <img id='image-sidebar' src={Mexico} />
                <img id='image-sidebar' src={Golden} />
                <img id='image-sidebar' src={Hawaii} />
                {/* <img id='image-sidebar' src={Quebec} /> */}
            </div>
        </div>
    )

}

export default Interests