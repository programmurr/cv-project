import React from 'react';
import '../styles/PracticalExperience.css'
import { EditButton, ResubmitButton, DeleteButton } from './Buttons';


function EditExperience(props) {
  const {
    companyName,
    positionTitle,
    experienceFromDate,
    experienceToDate,
    responsibilities
  } = props.experienceInfo;

  return (
    <div className="experienceForm">
      <form onSubmit={props.handleEditSubmit}>
        <div className="companyName">
          <label htmlFor="companyNameInput">Company Name: </label>
          <input 
            type="text"
            name="companyName"
            value={companyName}
            onChange={props.onChange}
          />
        </div>
        <div className="positionTitle">
          <label htmlFor="positionTitleInput">Position Title: </label>
          <input 
            type="text"
            name="positionTitle"
            value={positionTitle}
            onChange={props.onChange}
          />
        </div>
        <div className="experienceFromDate">
          <label htmlFor="experienceFromInput">From:</label>
          <input 
            type="date"
            name="experienceFromDate"
            max={props.maxDate}
            value={experienceFromDate}
            onChange={props.onChange}
          />
        </div>
        <div className="experienceToDate">
          <label htmlFor="experienceToInput">To:</label>
          <input 
            type="date"
            name="experienceToDate"
            max={props.maxDate}
            value={experienceToDate}
            onChange={props.onChange}
          />
        </div>
        <div className="responsibilities">
          <label htmlFor="responsibilitiesInput">Responsibilities: </label>
          <textarea
            name="responsibilities"
            value={responsibilities}
            onChange={props.onChange} 
          />
        </div>
        <ResubmitButton />
      </form>
    </div>
  );
}

class PracticalExperienceDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      companyName: "",
      positionTitle: "",
      experienceFromDate: "",
      experienceToDate: "",
      responsibilities: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.experienceInfo);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleEditClick() {
    const state = Object.assign({}, this.state);
    state.editClicked = true;

    this.setState(state);
  }

  handleEditSubmit(event) {
    event.preventDefault();
    this.props.onExperienceEdit(this.state);
  }

  handleDeleteClick() {
    this.props.onExperienceDelete(this.state);
  }

  render() {
    const maxDate = new Date().toISOString().split("T")[0];

    const {
      companyName,
      positionTitle,
      experienceFromDate,
      experienceToDate,
      responsibilities,
      editClicked
    } = this.state;

    if (editClicked) {
      return (
        <EditExperience 
          maxDate={maxDate}
          onChange={this.handleChange}
          experienceInfo={this.state}
          handleEditSubmit={this.handleEditSubmit}
        />
      )
    } else {
      return (
        <div className="experienceDisplay">
          <ul>
            <li>Organization Name: {companyName}</li>
            <li>Position Title: {positionTitle}</li>
            <li>From: {experienceFromDate}</li>
            <li>To: {experienceToDate}</li>
            <li>Responsibilities: {responsibilities}</li>
          </ul>
          <div className="buttonsContainer">
            <EditButton handleEditClick={this.handleEditClick} />
            <DeleteButton handleDeleteClick={this.handleDeleteClick} />
          </div>
        </div>
      );
    }
  }
}

export default PracticalExperienceDisplay;