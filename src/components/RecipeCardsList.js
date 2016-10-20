import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class RecipeCardsList extends Component {
  handleDeleteRecipe = (index) => {
    this.props.onDeleteRecipe(index);
  }

  render () {
    const recipeCards = this.props.data
      .map( (recipe, index) => {
        return (
          <RecipeCard
            key={recipe.recipe}
            recipeIndex={index}
            recipe={recipe}
            onDeleteRecipe={this.handleDeleteRecipe} />
        );
      });

    return (
      <div>
        {recipeCards}
      </div>
    );
  }
}

export default RecipeCardsList;
