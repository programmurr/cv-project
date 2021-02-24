import React from 'react';
import '../styles/GeneralInfo.css'

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.info);

    return (
      <div className="generalInfo">
        <h2>General Info</h2>
        <form>
          <div className="generalInfoName">
            <label htmlFor="nameInput">Name: </label>
            <input type="text" id="nameInput" />
          </div>
          <div className="generalInfoEmail">
            <label htmlFor="emailInput">Email: </label>
            <input type="text" id="emailInput" />
          </div>
          <div className="generalInfoPhone">
            <label htmlFor="PhoneInput">Phone: </label>
            <input type="text" id="phoneInput" />
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;