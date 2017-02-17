import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { 
  Button,
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'


const validate = values => {
  const errors = {}
  const requiredFields = [ 'recipeTitle', 'recipeIngredients' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <FormGroup controlId={input.name} validationState={null}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type="text" {...input} />
      {touched && error && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  )
}


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

  closeModal = () => {
    this.setState({
      title: '',
      ingredients: ''
    })
    this.props.onCloseModal()
  }

  handleAddRecipe = () => {
    const newRecipe = {
      title: this.state.title,
      ingredients: this.state.ingredients.split(',').map((ingredient) => ingredient.trim())
    }
    this.props.onAddRecipe(newRecipe)
    this.closeModal()
  }

  handleEditRecipe = () => {
    const editedRecipe = {
      title: this.state.title,
      ingredients: this.state.ingredients.split(',').map((ingredient) => ingredient.trim())
    }
    this.props.onEditRecipe(editedRecipe)
    this.closeModal()
  }

  render() {

    let modalTitle, modalButton

    if (this.props.isEdit) {
      modalTitle = "Edit Recipe"
      modalButton = <Button type="submit" bsStyle="primary" onClick={this.handleEditRecipe}>Confirm</Button>
    } else {
      modalTitle = "Add Recipe"
      modalButton = <Button type="submit" bsStyle="primary" onClick={this.handleAddRecipe}>Add</Button>
    }

    return (
      <Modal show={this.props.showModal} onEnter={this.checkIfEdit} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Field
              name="recipeTitle"
              component={renderTextField}
              label="Recipe Title" />
            <Field
              name="recipeIngredients"
              component={renderTextField}
              label="Recipe Ingredients" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          {modalButton}
          <Button onClick={this.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default reduxForm({
  form: 'RecipeForm',
  validate
})(RecipeModal)
