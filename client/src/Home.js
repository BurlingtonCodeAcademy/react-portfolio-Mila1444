import React from 'react'
import Machu from './images-icons/photos/machu.jpg';
import Llama from './images-icons/photos/llama.jpg';

//import MilaBackground from './images-icons/photos/mila-one.JPG'

function Home(props) {
    return (
        <div id='main-container'>
            <div id='body-home'>
                <div className='hero-image'>
                    <h1 className='hero-text'> Hi. I am Mila!</h1>
                </div>
                <div id='content-home'>
                <p id='p-home'> I am a motivated digital marketing professional who has recently dived into the coding and developing world.</p>

                <p id='p-home'>My expertise in digital marketing strategy and coding, gives me deep understanding of what successful digital strategies should look like and provides me with unique skills to implement them.</p>

                <p id='p-home'>I am fast learner, passionate about data-driven thinking, and enjoy facing new challenges.</p>
                </div>
            </div>
        </div>

    )

}

export default Home