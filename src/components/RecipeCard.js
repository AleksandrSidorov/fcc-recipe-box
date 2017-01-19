import React, { Component } from 'react'
import IngredientsList from './IngredientsList'
import { Panel } from 'react-bootstrap'

class RecipeCard extends Component {
  handleDelete = () => {
    //console.log(this.props.recipeIndex);
    this.props.onDeleteRecipe(this.props.recipeIndex)
  }

  render () {
    const recipeItem = this.props.recipe
    const recipeIndex = this.props.recipeIndex
    return (
      <Panel header={recipeItem.recipe} eventKey={recipeIndex}>
        <IngredientsList ingredients={recipeItem.ingredients} />
        <div className="panel-footer">
          <button className="btn btn-primary mr-2">Edit</button>
          <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </Panel>
    );
  }
}

export default RecipeCard;
