import React, { Component } from 'react';

class Topic extends Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleInput(e){
    this.props.updateUserInput(e.target.value);
  }
  handleClick(){
    this.props.solveToyProblem();
  }
  render() {
    return (
      <div className="topic" >
        <h4>{this.props.title}</h4>
        <input className="inputLine"
               value={this.props.value}
               onChange={this.handleInput} />
        <button className="confirmationButton" onClick={this.handleClick}>
          {this.props.buttonText}
        </button>
        <div className="resultsBox">
          {this.props.resultLabel1}{this.props.result1}
        </div>
        <div className="resultsBox">
          {this.props.resultLabel2}{this.props.result2}
        </div>
      </div>
    )
  }
}

export default Topic;