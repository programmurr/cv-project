import React from 'react';
import '../styles/GeneralInfo.css';
import SubmitButton from './SubmitButton';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onInfoSubmit(this.state);
    this.setState({
      name: "",
      email: "",
      phone: ""
    })
  }


  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="generalInfo">
        <h2>General Info</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="generalInfoName">
            <label htmlFor="nameInput">Name: </label>
            <input 
              type="text" 
              name="name" 
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="generalInfoEmail">
            <label htmlFor="emailInput">Email: </label>
            <input 
              type="text" 
              name="email" 
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="generalInfoPhone">
            <label htmlFor="PhoneInput">Phone: </label>
            <input 
              type="text" 
              name="phone" 
              value={phone}
              onChange={this.handleChange}
            />
          </div>
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;