import React, { Component } from 'react';

import RecipecardsList from './RecipeCardsList';
import AddRecipe from './AddRecipe'

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
        <AddRecipe />
      </div>
    );
  }
}

export default App;
