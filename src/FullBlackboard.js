import React, { Component } from 'react';
import Blackboard from './Blackboard';
import './FullBlackboard.css';

class FullBlackboard extends Component {

  constructor(props){
      super(props);
      this.state = {blackboardText: 'Hello there!',
                    textChanged: false, textToInsert: ''};

      this.resetHandler = this.resetHandler.bind(this);
      this.textChangedHandler = this.textChangedHandler.bind(this);
      this.replaceText = this.replaceText.bind(this);
  }

  resetHandler(){
     this.setState({blackboardText: ''});
  }

  textChangedHandler(e){
      this.setState({textChanged: true});
      this.setState({textToInsert: e.target.value});
  }

  replaceText(){
      if(this.state.textChanged){
          this.setState({blackboardText: this.state.textToInsert});
          this.setState({textChanged: false});
      }
  }

  render() {
    return (
      <div>
       <center>
       <Blackboard text={this.state.blackboardText}/>
       <button onClick={this.resetHandler}>Reset</button>
       <button onClick={this.replaceText}>Write</button><br/>
       <textarea value={this.state.textToInsert} className="textArea" onChange={this.textChangedHandler}></textarea>
       </center>
      </div>
    );
  }
}

export default FullBlackboard;
