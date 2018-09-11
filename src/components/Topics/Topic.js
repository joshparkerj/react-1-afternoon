import React, { Component } from 'react';

class Topic extends Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleInput(e){
    this.props.updateUserInput(e.target.value);
  }
  handleInput2(e){
    this.props.updateUserInput2(e.target.value);
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
        <input className={this.props.input2}
               value={this.props.value2}
               onChange={this.handleInput2} />
        <button className="confirmationButton" onClick={this.handleClick}>
          {this.props.buttonText}
        </button>
        <span className={this.props.spanClass1}>
          {this.props.resultLabel1}{this.props.result1}
        </span>
        <span className={this.props.spanClass2}>
          {this.props.resultLabel2}{this.props.result2}
        </span>
      </div>
    )
  }
}

export default Topic;