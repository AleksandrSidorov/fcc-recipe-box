import React, { Component } from 'react';
import Modal from 'react-modal';

class AddRecipeModal extends Component {
  openModal = () => this.setState({modalIsOpen: true});

  closeModal = () => this.setState({modalIsOpen: false});

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open
    // even if it requested to be closed
    this.setState({modalIsOpen: false});
  }

  // TODO Add Recipe handler here
  handleModalAddRecipe = () => {
    return;
  }

  render () {
    return (
      <div>
        <button onClick={this.onpenModal} className="btn btn-success">
          Add Recipe
        </button>
        <Modal
          className="Modal__Bootstrap modal-dialog"
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
              Body Here...
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
