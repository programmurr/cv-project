import React from 'react';
import '../styles/Buttons.css'

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

export default EditButton;