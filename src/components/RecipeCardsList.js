import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class RecipeCardsList extends Component {
  render () {
    const recipeCards = this.props.data
      .map( (recipe, index) => {
        return (
          <RecipeCard
            key={recipe.recipe}
            recipeIndex={index}
            recipe={recipe}
            onDeleteRecipe={this.props.onDeleteRecipe} />
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
