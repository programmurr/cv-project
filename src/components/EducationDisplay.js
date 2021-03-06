import React from 'react';
import { EditButton, ResubmitButton, DeleteButton } from './Buttons';
import dateValidator from '../utils/dateValidator';


function EditForm(props) {
  const { schoolName, courseTitle, studyFromDate, studyToDate } = props.educationInfo;

  return (
    <div className="educationEditForm">
    <form onSubmit={props.handleEditSubmit}>
      <div className="schoolName">
        <label htmlFor="schoolNameInput">School Name:</label>
        <input 
          type="text"
          name="schoolName"
          required="required"
          value={schoolName}
          onChange={props.onChange}
        />
      </div>
      <div className="courseTitle">
        <label htmlFor="courseTitleInput">Course Title:</label>
        <input 
          type="text"
          name="courseTitle"
          required="required"
          value={courseTitle}
          onChange={props.onChange}
        />
      </div>
      <div className="studyFromDate">
        <label htmlFor="studyFromInput">From:</label>
        <input 
          type="date"
          name="studyFromDate"
          required="required"
          max={props.maxDate}
          value={studyFromDate}
          onChange={props.onChange}
        />
      </div>
      <div className="studyToDate">
        <label htmlFor="studyToInput">To:</label>
        <input 
          type="date"
          name="studyToDate"
          required="required"
          max={props.maxDate}
          value={studyToDate}
          onChange={props.onChange}
        />
      </div>
      <ResubmitButton />
    </form>
  </div>
  )
}

class EducationDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      schoolName: "",
      courseTitle: "",
      studyFromDate: "",
      studyToDate: "",
      editClicked: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.educationInfo)
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
    const validated = dateValidator(this.state.studyFromDate, this.state.studyToDate);

    if (validated) {
      this.props.onEducationEdit(this.state);
    } else {
      alert("Please enter a valid date");
    }
  }

  handleDeleteClick() {
    this.props.onEducationDelete(this.state);
  }

  render() {
    const maxDate = new Date().toISOString().split("T")[0];

    const { 
      schoolName, 
      courseTitle, 
      studyFromDate,
      studyToDate,
      editClicked 
    } = this.state;

    if (editClicked) {
      return (
        <EditForm
          maxDate={maxDate}
          onChange={this.handleChange} 
          educationInfo={this.state}
          handleEditSubmit={this.handleEditSubmit}
        />
      )
    } else {
      return (
        <div className="educationDisplay">
          <ul>
            <li>School Name: {schoolName}</li>
            <li>Course Title: {courseTitle}</li>
            <li>From: {studyFromDate}</li>
            <li>To: {studyToDate}</li>
          </ul>
          <div className="buttonsContainer">
            <EditButton handleEditClick={this.handleEditClick} />
            <DeleteButton handleDeleteClick={this.handleDeleteClick} />
          </div>
        </div>
      )
    }
  }
}

export default EducationDisplay;