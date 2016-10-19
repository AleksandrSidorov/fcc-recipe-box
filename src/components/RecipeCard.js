import React, { Component } from 'react';
import IngredientsList from './IngredientsList';

class RecipeCard extends Component {
  handleDelete = () => {
    console.log(this.props.recipeIndex);
    this.props.onDeleteRecipe(this.props.recipeIndex);
  }

  render () {
    return (
      <div className="card">
        <div className="card-header">
          {this.props.recipe.recipe} - {this.props.recipeIndex}
        </div>
        <div className="card-block">
          <IngredientsList ingredients={this.props.recipe.ingredients} />
        </div>
        <div className="card-block">
          <div className="btn-toolbar">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
