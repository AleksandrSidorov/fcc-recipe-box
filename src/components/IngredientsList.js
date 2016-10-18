import React, { Component } from 'react';

class IngredientsList extends Component {
  render () {
    const ingredientItem = this.props.ingredients
      .map( (ingredient) => {
        return (
          <li key={ingredient} className="list-group-item">{ingredient}</li>
        );
      });

    return (
      <ul className="list-group">
        {ingredientItem}
      </ul>
    );
  }
}

export default IngredientsList;
