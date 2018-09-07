import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component {
  render() {
    return (
      <div className="topic-browser" >
        <p>Hello World.</p>
        <div className="topics">
          <EvenAndOdd />
          <FilterObject />
          <FilterString />
          <Palindrome />
          <Sum />
        </div>
      </div>
    )
  }
}

export default TopicBrowser;