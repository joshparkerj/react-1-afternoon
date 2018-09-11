import React, { Component } from 'react';
import Topic from './Topic';

function filterMyObjects(objArr,propertyName){
  return objArr.filter(e => propertyName in e);
}

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [{
          flavor: 'Vanilla',
          cone: 'Waffle',
          price: '$1.99',
          temperature: 'icy',
          manufacturer: 'skil',
          aroma: 'pungent',
          type: 'luxury'
        },{
          flavor: 'Banana',
          cone: 'Crispy',
          price: '$1.49',
          manufacturer: 'Kraft',
          size: 'normal',
          aroma: 'divine',
          type: 'children\'s'
        },{
          flavor: 'Chocolate',
          cone: 'Soggy',
          price: '$0.39',
          aroma: 'unscented',
          countryOfOrigin: 'Mexico'
        },{
          flavor: 'Caramel',
          cone: 'Enormous',
          price: '$2.19',
          manufacturer: 'Great Value',
          prepTime: '25 minutes',
          aroma: 'garbage truck',
          type: 'vanity'
        },{
          flavor: 'Strawberry',
          cone: 'Mammoth',
          price: '$3.35',
          prepTime: '45 seconds',
          countryOfOrigin: 'Niger',
          size: 'Gargantuan',
          aroma: 'spicy?'
        },{
          flavor: 'Chicken',
          cone: 'fried oreo',
          price: '$2.69',
          temperature: 'lukewarm',
          manufacturer: 'McDonald\'s',
          aroma: 'sickly sweet'
        },{
          flavor: 'Blueberry',
          cone: 'fake',
          price: '$1.09',
          temperature: 'cold',
          prepTime: 'two and a half minutes',
          manufacturer: 'Maverik',
          size: 'small'
        }
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
      filteredArray: filterMyObjects(
        this.state.unFilteredArray,this.state.userInput
      )
    });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB" >
        <Topic title="Filter Object"
               updateUserInput={this.updateUserInput}
               buttonText="Filter"
               solveToyProblem={this.solveToyProblem}
               spanClass1="puzzleText"
               resultLabel1="Original: "
               result1={
                 this.state.unFilteredArray
                   .map(e => JSON.stringify(e).split(',').join(' '))
                }
               spanClass2="resultsBox filterObjectRB"
               resultLabel2="Filtered: "
               result2={
                 this.state.filteredArray &&
                 this.state.filteredArray
                   .map(e => JSON.stringify(e).split(',').join(' '))
                }
                input2="hidden" />

      </div>
    )
  }
}

export default FilterObject;