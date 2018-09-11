import React, { Component } from 'react';
import Topic from './Topic';

function add(a,b){
  try {
    return Number(a)+Number(b);
  } catch (err) {
    return null;
  }
}

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
    this.updateUserInput = this.updateUserInput.bind(this);
    this.updateUserInput2 = this.updateUserInput2.bind(this);
    this.solveToyProblem = this.solveToyProblem.bind(this);
  }
  updateUserInput(input){
    this.setState({number1: input});
  }
  updateUserInput2(input){
    this.setState({number2: input});
  }
  solveToyProblem(){
    this.setState({
      sum: String(add(this.state.number1,this.state.number2))
    })
  }
  render() {
    return (
      <div className="puzzleBox sumPB" >
        <Topic title="Sum"
               updateUserInput={this.updateUserInput}
               updateUserInput2={this.updateUserInput2}
               buttonText="Add"
               solveToyProblem={this.solveToyProblem}
               spanClass1="resultsBox"
               resultLabel1="Sum: "
               result1={this.state.sum}
               spanClass2=""
               resultLabel2=""
               result2=""
               input2="inputLine"/>

      </div>
    )
  }
}

export default Sum;