import React, { Component } from 'react';
import Topic from './Topic';

function parseInput(input){
  return input.split(',').map(e => Number(e));
}
function evens(input){
  return parseInput(input).filter(e => !(e%2)).join(',');
}
function odds(input){
  return parseInput(input).filter(e => e%2).join(',');
}

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
    this.updateUserInput = this.updateUserInput.bind(this);
    this.solveToyProblem = this.solveToyProblem.bind(this);
  }
  updateUserInput(input){
    this.setState({userInput: input});
  }
  solveToyProblem(){
    this.setState({
      evenArray: evens(this.state.userInput),
      oddArray: odds(this.state.userInput)
    })
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <Topic title="Evens and Odds"
               updateUserInput={this.updateUserInput}
               buttonText="Split"
               solveToyProblem={this.solveToyProblem}
               spanClass1="resultsBox"
               resultLabel1="Evens: "
               result1={this.state.evenArray}
               spanClass2="resultsBox"
               resultLabel2="Odds: "
               result2={this.state.oddArray}
               input2="hidden" />
      </div>
    )
  }
}

export default EvenAndOdd;