import React from 'react';
import '../styles/PracticalExperience.css'
import AddButton from './AddButton';
import EditButton from './EditButton';

function PracticalExperienceForm(props) {
  const maxDate = new Date().toISOString().split("T")[0];
  
  return (
    <div className="experienceForm">
      <h2>Practical Experience</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="companyName">
          <label htmlFor="companyNameInput">Company Name: </label>
          <input 
            type="text"
            name="companyName"
            value={props.companyName}
            onChange={props.handleChange}
          />
        </div>
        <div className="positionTitle">
          <label htmlFor="positionTitleInput">Position Title: </label>
          <input 
            type="text"
            name="positionTitle"
            value={props.positionTitle}
            onChange={props.handleChange}
          />
        </div>
        <div className="experienceFromDate">
          <label htmlFor="experienceFromInput">From:</label>
          <input 
            type="date"
            name="experienceFromDate"
            max={maxDate}
            value={props.experienceFromDate}
            onChange={props.handleChange}
          />
        </div>
        <div className="experienceToDate">
          <label htmlFor="experienceToInput">To:</label>
          <input 
            type="date"
            name="experienceToDate"
            max={maxDate}
            value={props.experienceToDate}
            onChange={props.handleChange}
          />
        </div>
        <div className="responsibilities">
          <label htmlFor="responsibilitiesInput">Responsibilities: </label>
          <textarea
            name="responsibilities"
            value={props.responsibilities}
            onChange={props.handleChange} 
          />
        </div>
        <AddButton />
      </form>
    </div>
  );
}

function PracticalExperienceDisplay(props) {
  return (
    <div className="experienceDisplay">
      <h2>Experience</h2>
      <ul>
        <li>Organization Name: {props.companyName}</li>
        <li>Position Title: {props.positionTitle}</li>
        <li>From: {props.experienceFromDate}</li>
        <li>To: {props.experienceToDate}</li>
        <li>Responsibilities: {props.responsibilities}</li>
      </ul>
      <div className="buttonsContainer">
        <EditButton handleEditClick={props.handleEdit} />
        <AddButton />
      </div>
    </div>
  );
}

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      positionTitle: "",
      experienceFromDate: "",
      experienceToDate: "",
      responsibilities: ""
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
    this.props.onExperienceSubmit(this.state, true);
  }

  handleEdit() {
    this.props.onExperienceSubmit(this.state, false);
  }

  render() {
    const {
      companyName,
      positionTitle,
      experienceFromDate,
      experienceToDate,
      responsibilities
    } = this.state;

    if (this.props.experienceSubmitted) {
      return (
        <PracticalExperienceDisplay 
          companyName={companyName}
          positionTitle={positionTitle}
          experienceFromDate={experienceFromDate}
          experienceToDate={experienceToDate}
          responsibilities={responsibilities}
          handleEdit={this.handleEdit}
        />
      );
    } else {
      return (
        <PracticalExperienceForm 
          companyName={companyName}
          positionTitle={positionTitle}
          experienceFromDate={experienceFromDate}
          experienceToDate={experienceToDate}
          responsibilities={responsibilities}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }
}

export default PracticalExperience;