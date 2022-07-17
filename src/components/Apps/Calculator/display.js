import React, {Component} from 'react';
import "./calculator.css";

class Display extends Component {
    render(){
        return(
            <div className="Display">
                {this.props.data}
            </div>
        );
    }
}

export default Display;