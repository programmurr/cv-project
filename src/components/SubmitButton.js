import React from 'react';
import '../styles/Buttons.css'

class SubmitButton extends React.Component {
  render() {
    return (
      <div className="submitButton">
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default SubmitButton;