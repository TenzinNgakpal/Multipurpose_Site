import React from 'react'
import { Link } from 'react-router-dom'
import "./Pages.css"
class Tools extends React.Component {
    render() {
        return (
            <div>
                <div className="banner"> <h1>Tools</h1></div>
                <div className="Apps">
                    <div>
                        <Link to="/tools/to-do" className='Item'>To-do App</Link>
                    </div>
                    <div className='ImgBox'>
                        <Link to="/tools/to-do">
                            <img className='Img' src='https://cdn.onlinewebfonts.com/svg/img_532951.png' alt='Todo List'/>
                        </Link>
                    </div>
                </div>
                <div className="Apps">
                    <div>
                        <Link to="/tools/calculator" className='Item'>Calculator App</Link>
                    </div>
                    <div className='ImgBox'>
                        <Link to="/tools/calculator">
                            <img className='Img' src='https://static.vecteezy.com/system/resources/previews/000/506/094/original/calculator-icon-design-vector.jpg' alt='Calculator'/>
                        </Link>
                    </div>
                </div>
                <div className="Apps">
                    <div>
                        <Link to="/tools/*" className='Item'>More to Come</Link>
                    </div>
                    <div className='ImgBox'>
                        <Link to="/tools/*">
                            <img className='Img' src='https://www.shareicon.net/data/512x512/2016/06/07/777348_interface_512x512.png' alt='WIP'/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Tools;