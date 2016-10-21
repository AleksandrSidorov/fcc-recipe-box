import React, { Component } from 'react';
import IngredientsList from './IngredientsList';

class RecipeCard extends Component {
  handleDelete = () => {
    //console.log(this.props.recipeIndex);
    this.props.onDeleteRecipe(this.props.recipeIndex);
  }

  render () {
    const recipeItem = this.props.recipe;
    return (
      <div className="card">
        <div className="card-header">
          <a
            data-toggle="collapse"
            href={"#collapse" + recipeItem.recipe.replace(/\s+/g, '')}
            aria-controls={"collapse" + recipeItem.recipe.replace(/\s+/g, '')}>
            {recipeItem.recipe}
          </a>
        </div>
        <div className="collapse" id={"collapse" + recipeItem.recipe.replace(/\s+/g, '')}>
          <div className="card-block">
            <IngredientsList ingredients={recipeItem.ingredients} />
          </div>
          <div className="card-block">
            <div className="btn-toolbar">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
