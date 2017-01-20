import React from 'react'
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

class AddRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      title: '',
      ingredients: ''
    }
  }

  open = () => this.setState({ showModal: true })

  close = () => this.setState({
    showModal: false,
    title: '',
    ingredients: ''
  })

  getTitleValidationState = () => {
    const titleLength = this.state.title.length
    if (titleLength < 1) return "error"
  }

  handleTitleChange = (event) => this.setState({ title: event.target.value })

  handleIngredientsChange = (event) => this.setState({ ingredients: event.target.value })


  render() {
    return (
      <div>
        <Button bsStyle="success" onClick={this.open}>
          Add Recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
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
            <Button type="submit" bsStyle="primary">Add</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

export default AddRecipe
