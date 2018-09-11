import React, { Component } from 'react';
import Topic from './Topic';

function filterMyStrings(arr,input){
  return arr.filter(e => e.includes(input));
}

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        'george','molly','django','buddy','spot','skyler','martinez','oscar',
        'bush','abraham','scooter','tornado','black lightning','t\'challa',
        'tony','olivia','popeye','gross-out','zappa','neato','scuse me',
        'coltrane','douglas','turing','linus torvalds','linus pauling',
        'richard stallman','emacs','steve jobs','bill gates','sergio leone',
        'clint eastwood','molly hatchet','frank frazetta','conan','red sonja'
      ],
      userInput: '',
      filteredArray: []
    }
    this.updateUserInput = this.updateUserInput.bind(this);
    this.solveToyProblem = this.solveToyProblem.bind(this);
  }
  updateUserInput(input){
    this.setState({userInput: input});
  }
  solveToyProblem(){
    this.setState({
      filteredArray: filterMyStrings(
        this.state.unFilteredArray,this.state.userInput
      )
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB" >
        <Topic title="Filter String"
               updateUserInput={this.updateUserInput}
               buttonText="Filter"
               solveToyProblem={this.solveToyProblem}
               spanClass1="puzzleText"
               resultLabel1="Names: "
               result1={this.state.unFilteredArray.join(' ')}
               spanClass2="resultsBox filterStringRB"
               resultLabel2="Filtered Names: "
               result2={this.state.filteredArray.join(' ')}
               input2="hidden" />
      </div>
    )
  }
}

export default FilterString;