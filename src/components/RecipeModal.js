import React from 'react'
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

class RecipeModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      ingredients: ''
    }
  }

  checkIfEdit = () => {
    if (this.props.isEdit) {
      this.setState({
        title: this.props.editRecipe.title,
        ingredients: this.props.editRecipe.ingredients.join(', ')
      })
    }
  }

  close() {
    this.setState({
      title: '',
      ingredients: ''
    })
    this.props.onCloseModal()
  }

  getTitleValidationState = () => {
    const titleLength = this.state.title.length
    if (titleLength < 1) return "error"
  }

  handleTitleChange = (event) => this.setState({ title: event.target.value })

  handleIngredientsChange = (event) => this.setState({ ingredients: event.target.value })

  handleAddRecipe() {
    const newRecipe = {
      title: this.state.title,
      ingredients: this.state.ingredients.split(',')
    }
    this.props.onAddRecipe(newRecipe)
    this.close()
  }

  handleEditRecipe() {
    const editedRecipe = {
      title: this.state.title,
      ingredients: this.state.ingredients.split(',')
    }
    this.props.onEditRecipe(editedRecipe)
    this.close()
  }


  render() {

    let modalTitle = null
    let modalButton = null

    if (this.props.isEdit) {
      modalTitle = "Edit Recipe"
      modalButton = <Button type="submit" bsStyle="primary" onClick={this.handleEditRecipe.bind(this)}>Confirm</Button>
    } else {
      modalTitle = "Add Recipe"
      modalButton = <Button type="submit" bsStyle="primary" onClick={this.handleAddRecipe.bind(this)}>Add</Button>
    }

    return (
      <Modal show={this.props.showModal} onEnter={this.checkIfEdit.bind(this)} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formRecipeTitle" validationState={this.getTitleValidationState()}>
              <ControlLabel>Recipe Title</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                onChange={this.handleTitleChange} />
            </FormGroup>
            <FormGroup controlId="formRecipeIngredients">
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl
                type="text"
                value={this.state.ingredients}
                onChange={this.handleIngredientsChange}
              />
              <HelpBlock>Enter comma separated ingredients</HelpBlock>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {modalButton}
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default RecipeModal
