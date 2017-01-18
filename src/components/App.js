import React, { Component } from 'react';
import RecipecardsList from './RecipeCardsList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Recipe Box</h1>
        <RecipecardsList />
      </div>
    );
  }
}

export default App;
