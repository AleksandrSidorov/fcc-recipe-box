import React, { Component } from 'react';
import IngredientsList from './IngredientsList';

class RecipeCard extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-header">
          {this.props.recipe.recipe}
        </div>
        <div className="card-block">
          <IngredientsList ingredients={this.props.recipe.ingredients} />
        </div>
        <div className="card-block">
          <div className="btn-toolbar">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
