import React, { Component } from 'react';
import './App.css';

const INIT_RECIPES = [
  {recipe: "Cheese omelette", ingredients: ["eggs", "olive oil", "cheddar cheese"]},
  {recipe: "Pancakes", ingredients: ["flour", "milk", "eggs", "butter"]}
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    if(!localStorage.getItem('_recipe_list')) {
      this.populateStorage();
    } else {
      this.getStoredRecipes();
    }
  }

  getStoredRecipes = () => {
    this.setState({
      data: JSON.parse(localStorage.getItem('_recipe_list'))
    });
  };

  populateStorage = () => {
    localStorage.setItem('_recipe_list', JSON.stringify(INIT_RECIPES));
    this.getStoredRecipes();
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to Recipe Box</h1>
      </div>
    );
  }
}

export default App;
