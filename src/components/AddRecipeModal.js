import React, { Component } from 'react';
import Modal from 'react-modal';

class AddRecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      recipeValue: {
        recipeName: '',
        ingredientsList: []
      }
    };
  }

  openModal = () => this.setState({modalIsOpen: true});

  closeModal = () => this.setState({modalIsOpen: false});

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open
    // even if it requested to be closed
    this.setState({modalIsOpen: false});
  };

  // TODO Add Recipe handler here
  handleModalAddRecipe = () => {
    return false;
  };

  handleFormChange = (event) => {
    this.setState({recipeValue: {
      recipeName: event.target.value
    }})
  }

  render () {
    console.log(this.state);
    return (
      <div>
        <button
          onClick={this.openModal}
          className="btn btn-success">
          Add Recipe
        </button>
        <Modal
          className="Modal__Bootstrap modal-dialog"
          role="document"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}>
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.handleModalCloseRequest}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Add Recipe</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="recipeNameInput">Recipe Name</label>
                <input type="text"
                  id="recipeNameInput"
                  className="form-control"
                  placeholder="Recipe name" />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredientsInput">Ingredients</label>
                <input type="text"
                  id="recipeIngredientsInput"
                  className="form-control"
                  placeholder="ingredient, ingredient, ..." />
              </div>
            </div>
            <div className="modal-footer">
              <div className="btn-toolbar">
                <button type="button" className="btn btn-default" onClick={this.handleModalCloseRequest}>Close</button>
                <button type="button" className="btn btn-primary" onClick={this.handleModalAddRecipe}>Add</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddRecipeModal;
