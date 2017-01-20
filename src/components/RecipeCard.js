import React, { Component } from 'react'
import IngredientsList from './IngredientsList'

class RecipeCard extends Component {
  handleDelete = () => {
    this.props.onDeleteRecipe(this.props.recipeIndex)
  }

  render () {
    const recipeItem = this.props.recipe
    return (
      <div>
        <IngredientsList ingredients={recipeItem.ingredients} />
        <div className="btn-toolbar">
          <button className="btn btn-primary mr-2">Edit</button>
          <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
