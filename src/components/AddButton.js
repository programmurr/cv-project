import React from 'react';
import '../styles/Buttons.css'

class AddButton extends React.Component {
  render() {
    return (
      <div className="AddButton">
        <button type="submit">Add</button>
      </div>
    );
  }
}

export default AddButton;