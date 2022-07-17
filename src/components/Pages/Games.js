import React from 'react'
import { Link } from 'react-router-dom'

class Games extends React.Component {
    render() {
        return (
            <div>
                <h1>Games</h1>
                <div className='Apps'>
                    <div className='Item'>
                        <Link to="/games/tic-tac-toe" className='Item'>Tic-Tac-Toe</Link>
                    </div>
                    <div className='ImgBox'>
                        <Link to="/games/tic-tac-toe">
                            <img className='Img' src='https://cdn0.iconfinder.com/data/icons/web-ui-vol-4/64/tic_tac_toe-512.png' alt='Tic Tac Toe'/>
                        </Link>
                    </div>
                </div>
                <div className='Apps'>
                    <div className='Item'>
                        <Link to="/games/*" className='Item'>More to Come</Link>
                    </div>
                    <div className='ImgBox'>
                        <Link to="/games/*">
                            <img className='Img' src='https://www.shareicon.net/data/512x512/2016/06/07/777348_interface_512x512.png' alt='WIP'/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Games;