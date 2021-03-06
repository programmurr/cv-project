import React from 'react';
import '../styles/Buttons.css'

class ResubmitButton extends React.Component {
  render() {
    return (
      <div className="ResubmitButton">
        <button type="submit">Resubmit</button>
      </div>
    );
  }
}

export default ResubmitButton;