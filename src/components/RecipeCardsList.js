import React, { Component } from 'react'
import { PanelGroup, Panel } from 'react-bootstrap'

import RecipeCard from './RecipeCard'
import AddRecipe from './AddRecipe'

// Initial Data
const INIT_RECIPES = [
  {title: "Cheese omelette", ingredients: ["Eggs", "Olive oil", "Cheddar cheese"]},
  {title: "Pancakes", ingredients: ["Flour", "Milk", "Eggs", "Butter"]},
  {title: "Salad", ingredients: ["Cucumber", "Tomatoe", "Onion", "Olive oil"]}
];

class RecipeCardsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    if(!localStorage.getItem('_recipe_list')) {
      this.populateStorage(INIT_RECIPES)
      console.log('populated!');
      this.setState({ data: INIT_RECIPES })
    } else {
      this.setState({ data: JSON.parse(localStorage.getItem('_recipe_list')) })
    }
  }

  // Put ititial recipes to localStorage
  populateStorage = (data) => {
    localStorage.setItem('_recipe_list', JSON.stringify(data))
  }

  handleDeleteRecipe = (index) => {
    const newData = this.state.data.slice();
    newData.splice(index, 1);
    this.setState({
      data: newData
    })
    localStorage.setItem('_recipe_list', JSON.stringify(newData))
  }

  handleAddRecipe = (recipe) => {
    const newData = this.state.data.push(recipe)
    this.setState({
      data: newData
    })
    localStorage.setItem('_recipe_list', JSON.stringify(newData))
  }

  render () {
    const recipeCards = this.state.data
      .map( (recipe, index) => {
        return (
          <Panel header={recipe.title} eventKey={index} key={index}>
            <RecipeCard
              key={recipe.title}
              recipeIndex={index}
              recipe={recipe}
              onDeleteRecipe={this.handleDeleteRecipe} />
          </Panel>
        )
      })

    return (
      <div>
        <PanelGroup defaultActiveKey={0} accordion>
          {recipeCards}
        </PanelGroup>
        <AddRecipe />
      </div>
    )
  }
}

export default RecipeCardsList
