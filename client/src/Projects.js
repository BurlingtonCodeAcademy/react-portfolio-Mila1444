import React from 'react'
// import { Link } from 'react-router-dom'
import GuessNumber from './images-icons/projects/guess-number.png';
import Remock from './images-icons/projects/remock.png';
import TicTacToe from './images-icons/projects/tic-tac-toe.png';
import Yelpington from './images-icons/projects/yelpington.png';
import GeoVermonter from './images-icons/projects/geovermonter.png';

function Projects(props) {
    return (
        <div id='main-container'>
            <div id='body-home'>
                <h3 id="h3-home"> Projects</h3>
                <div id='project-container'>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/guess-the-number-Mila1444'>
                            <img src={GuessNumber} />
                        </a>
                        <h3>Guess the Number</h3>
                        <p>Description</p>
                    </div>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/remock-Mila1444'>
                            <img src={Remock} />
                        </a>
                        <h3>Remock</h3>
                        <p>Description</p>
                    </div>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-david-mila-tictactoe'>
                            <img src={TicTacToe} />
                        </a>
                        <h3>Tic-Tact-Toe</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div id='project-container'>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/yelpington-Mila1444'>
                            <img src={Yelpington} />
                        </a>
                        <h3>Yelpington</h3>
                        <p>Description</p>
                    </div>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/geo-vermonter-mila-g-j'>
                            <img src={GeoVermonter} />
                        </a>
                        <h3>Geo-Vermonter</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects