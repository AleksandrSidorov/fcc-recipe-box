import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class RecipeCardsList extends Component {
  render () {
    const recipeCards = this.props.data
      .map( (recipe) => {
        return (
          <RecipeCard
            key={recipe.recipe}
            recipe={recipe} />
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
