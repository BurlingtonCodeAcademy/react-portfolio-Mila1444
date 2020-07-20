import React from 'react'
// import { Link } from 'react-router-dom'
import GuessNumber from './images-icons/projects/guess-number.png';
import Remock from './images-icons/projects/remock.png';
import TicTacToe from './images-icons/projects/tic-tac-toe.png';
import Yelpington from './images-icons/projects/yelpington.png';
import GeoVermonter from './images-icons/projects/geovermonter.png';

function Projects(props) {
    return (
        <div id='body-projects'>
                <h3 id="h3-home"> Projects</h3>
                <div id='project-container'>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/guess-the-number-Mila1444'>
                            <img src={GuessNumber} />
                        </a>
                        <h5>Guess the Number</h5>
                        {/* <p>Description</p> */}
                    </div>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/remock-Mila1444'>
                            <img src={Remock} />
                        </a>
                        <h5>Remock</h5>
                        {/* <p>Description</p> */}
                    </div>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-david-mila-tictactoe'>
                            <img src={TicTacToe} />
                        </a>
                        <h5>Tic-Tact-Toe</h5>
                        {/* <p>Description</p> */}
                    </div>
                </div>
                <div id='project-container'>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/yelpington-Mila1444'>
                            <img src={Yelpington} />
                        </a>
                        <h5>Yelpington</h5>
                        {/* <p>Description</p> */}
                    </div>
                    <div id='image-wrapper'>
                        <a id='image-project' href='https://github.com/BurlingtonCodeAcademy/geo-vermonter-mila-g-j'>
                            <img src={GeoVermonter} />
                        </a>
                        <h5>Geo-Vermonter</h5>
                        {/* <p>Description</p> */}
                    </div>
                </div>
        </div>
    )

}

export default Projects