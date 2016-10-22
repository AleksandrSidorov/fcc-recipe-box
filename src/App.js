import React, { Component } from 'react';
import './App.css';
import RecipecardsList from './components/RecipeCardsList';
import AddRecipeModal from './components/AddRecipeModal';

const INIT_RECIPES = [
  {recipe: "Cheese omelette", ingredients: ["eggs", "olive oil", "cheddar cheese"]},
  {recipe: "Pancakes", ingredients: ["flour", "milk", "eggs", "butter"]},
  {recipe: "Salad", ingredients: ["Cucumber", "Tomatoe", "Onion", "Olive oil"]}
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      modalIsOpen: false
    };
  }

  componentDidMount() {
    if(!localStorage.getItem('_recipe_list')) {
      this.populateStorage(INIT_RECIPES);
    } else {
      this.getStoredRecipes();
    }
  }

  getStoredRecipes = () => {
    this.setState({
      data: JSON.parse(localStorage.getItem('_recipe_list'))
    });
  };

  populateStorage = (data) => {
    localStorage.setItem('_recipe_list', JSON.stringify(data));
    this.getStoredRecipes();
  };

  handleDeleteRecipe = (index) => {
    const newData = this.state.data.slice();
    newData.splice(index, 1);
    this.setState({
      data: newData
    });
    console.log('New State: ')
    console.log(this.state.data);
  };

  render() {
    return (
      <div className="container">
        <h1>Recipe Box</h1>
        <RecipecardsList data={this.state.data} onDeleteRecipe={this.handleDeleteRecipe} />
        <AddRecipeModal modalIsOpen={this.state.modalIsOpen} />
      </div>
    );
  }
}

export default App;
