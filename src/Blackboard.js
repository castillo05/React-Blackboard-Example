import React, { Component } from 'react';
import './Blackboard.css';

class Blackboard extends Component {
    render() {
        return (
            <div id="myBlackboard" className="element">
                {this.props.text}
            </div>
        );
    }
}

export default Blackboard;
