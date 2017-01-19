import React from 'react'

class Modal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="appModal" tabIndex="-1" role="dialog" aria-labelledby="appModalLabel" aria-didden="true">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="appModalLabel">Add Recipe</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Hello!
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
