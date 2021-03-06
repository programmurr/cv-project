import React from 'react';


class AddButton extends React.Component {
  render() {
    return (
      <div className="AddButton">
        <button type="submit">Add</button>
      </div>
    );
  }
}

class EditButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.handleEditClick}>Edit</button>
    );
  }
}

class ResubmitButton extends React.Component {
  render() {
    return (
      <div className="ResubmitButton">
        <button type="submit">Resubmit</button>
      </div>
    );
  }
}

class DeleteButton extends React.Component {
  render() {
    return (
      <div className="DeleteButton">
        <button onClick={this.props.handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

export { AddButton, EditButton, ResubmitButton, DeleteButton };