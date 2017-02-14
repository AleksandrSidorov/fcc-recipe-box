import React, { Component } from 'react'
import { PanelGroup, Panel, Button } from 'react-bootstrap'

import RecipeCard from './RecipeCard'
import RecipeModal from './RecipeModal'

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
      showModal: false,
      editMode: false,
      editRecipe: null,
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

  openModal = () => this.setState({ showModal: true })

  openModalEdit = (index) => this.setState({ showModal: true, editMode: true, editRecipe: index })

  closeModal = () => this.setState({ showModal: false, editMode: false, editRecipe: null })

  handleDeleteRecipe = (index) => {
    const newData = this.state.data.slice();
    newData.splice(index, 1);
    this.setState({
      data: newData
    })
    localStorage.setItem('_recipe_list', JSON.stringify(newData))
  }

  handleEditRecipe = (editedRecipe) => {
    const index = this.state.editRecipe
    const newData = [...this.state.data]
    newData[index] = editedRecipe
    this.setState({
      data: newData
    })
    localStorage.setItem('_recipe_list', JSON.stringify(newData))
  }

  handleAddRecipe(newRecipe) {
    const newData = [...this.state.data, newRecipe]
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
              onDeleteRecipe={this.handleDeleteRecipe}
              onEditModal={this.openModalEdit} />
          </Panel>
        )
      })

    return (
      <div>
        <PanelGroup defaultActiveKey={0} accordion>
          {recipeCards}
        </PanelGroup>
        <Button bsStyle="success" onClick={this.openModal}>
          Add Recipe
        </Button>
        <RecipeModal
          onAddRecipe={this.handleAddRecipe.bind(this)}
          onEditRecipe={this.handleEditRecipe.bind(this)}
          isEdit={this.state.editMode}
          showModal={this.state.showModal}
          editRecipe={this.state.data[this.state.editRecipe]}
          onCloseModal={this.closeModal.bind(this)} />
      </div>
    )
  }
}

export default RecipeCardsList
