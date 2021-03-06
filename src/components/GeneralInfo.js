import React from 'react';
import { AddButton, EditButton } from './Buttons';

function GeneralInfoForm(props) {
  return (
    <div className="generalInfoForm">
      <h2>General Info</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="generalInfoName">
          <label htmlFor="nameInput">Name: </label>
          <input 
            type="text" 
            name="name" 
            required="required"
            value={props.name}
            onChange={props.handleChange}
          />
        </div>
        <div className="generalInfoEmail">
          <label htmlFor="emailInput">Email: </label>
          <input 
            type="email" 
            name="email"
            required="required" 
            value={props.email}
            onChange={props.handleChange}
          />
        </div>
        <div className="generalInfoPhone">
          <label htmlFor="PhoneInput">Phone: </label>
          <input 
            type="text" 
            name="phone" 
            required="required"
            pattern="[0-9]{9,13}"
            value={props.phone}
            onChange={props.handleChange}
          />
        </div>
        <AddButton />
      </form>
    </div>
  )
}

function GeneralInfoDisplay(props) {
  return (
    <div className="generalInfoDisplay">
      <h2>General Info</h2>
      <ul>
        <li>Name: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Phone: {props.phone}</li>
      </ul>
      <EditButton handleEditClick={props.handleEdit}/>
    </div>
  );
}

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
    this.handleEdit = this.handleEdit.bind(this);
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
    this.props.onInfoSubmit(this.state, true);
  }

  handleEdit() {
    this.props.onInfoSubmit(this.state, false);
  }

  render() {
    const { name, email, phone } = this.state;

    if (this.props.infoSubmitted) {
      return (
        <GeneralInfoDisplay 
        name={name}
        email={email}
        phone={phone}
        handleEdit={this.handleEdit}
        />
      );
    } else {
      return (
        <GeneralInfoForm 
        name={name} 
        email={email}
        phone={phone}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
      );
    }
  }
}

export default GeneralInfo;