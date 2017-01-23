import React from 'react'
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

class RecipeModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: props.showModal,
      title: '',
      ingredients: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showModal: nextProps.showModal })
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
    console.log(newRecipe);
    this.props.onAddRecipe(newRecipe)
  }


  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
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
          <Button type="submit" bsStyle="primary" onClick={this.handleAddRecipe.bind(this)}>Add</Button>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default RecipeModal
