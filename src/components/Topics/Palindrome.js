import React, { Component } from 'react';
import Topic from './Topic';

function isPalindrome(str){
  const rts = str.split('').map((e,i) => str[str.length-i-1]).join('');
  return rts === str;
}

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      palindrome: ''
    }
    this.updateUserInput = this.updateUserInput.bind(this);
    this.solveToyProblem = this.solveToyProblem.bind(this);
  }
  updateUserInput(input){
    this.setState({userInput: input});
  }
  solveToyProblem(){
    this.setState({
      palindrome: String(isPalindrome(this.state.userInput))
    })
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB" >
        <Topic title="Palindrome"
               updateUserInput={this.updateUserInput}
               buttonText="Check"
               solveToyProblem={this.solveToyProblem}
               spanClass1="resultsBox"
               resultLabel1="Palindrome: "
               result1={this.state.palindrome}
               spanClass2=""
               resultLabel2=""
               result2=""
               input2="hidden" />
      </div>
    )
  }
}

export default Palindrome;