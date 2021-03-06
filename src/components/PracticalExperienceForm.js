import React from 'react';
import { AddButton }from './Buttons';
import uniqid from 'uniqid';
import dateValidator from '../utils/dateValidator';


class PracticalExperienceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uniqid(),
      companyName: "",
      positionTitle: "",
      experienceFromDate: "",
      experienceToDate: "",
      responsibilities: ""
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
    const validated = dateValidator(this.state.experienceFromDate, this.state.experienceToDate);

    if (validated) {
      this.props.onExperienceSubmit(this.state);

      this.setState({
        id: uniqid(),
        companyName: "",
        positionTitle: "",
        experienceFromDate: "",
        experienceToDate: "",
        responsibilities: ""
      })
    } else {
      alert("Please enter a valid date");
    }
    
  }

  render() {
    const maxDate = new Date().toISOString().split("T")[0];

    const {
      companyName,
      positionTitle,
      experienceFromDate,
      experienceToDate,
      responsibilities
    } = this.state;


    return (
      <div className="experienceForm">
        <form onSubmit={this.handleSubmit}>
          <div className="companyName">
            <label htmlFor="companyNameInput">Company Name: </label>
            <input 
              type="text"
              name="companyName"
              required="required"
              value={companyName}
              onChange={this.handleChange}
            />
          </div>
          <div className="positionTitle">
            <label htmlFor="positionTitleInput">Position Title: </label>
            <input 
              type="text"
              name="positionTitle"
              required="required"
              value={positionTitle}
              onChange={this.handleChange}
            />
          </div>
          <div className="experienceFromDate">
            <label htmlFor="experienceFromInput">From:</label>
            <input 
              type="date"
              name="experienceFromDate"
              required="required"
              max={maxDate}
              value={experienceFromDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="experienceToDate">
            <label htmlFor="experienceToInput">To:</label>
            <input 
              type="date"
              name="experienceToDate"
              required="required"
              max={maxDate}
              value={experienceToDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="responsibilities">
            <label htmlFor="responsibilitiesInput">Responsibilities: </label>
            <textarea
              name="responsibilities"
              required="required"
              value={responsibilities}
              onChange={this.handleChange} 
            />
          </div>
          <AddButton />
        </form>
      </div>
    );

  }
}

export default PracticalExperienceForm;