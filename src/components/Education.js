import React from 'react';
import '../styles/Education.css';
import AddButton from './AddButton';
import EditButton from './EditButton';

function EducationForm(props) {
  const maxDate = new Date().toISOString().split("T")[0];

  return (
    <div className="educationForm">
      <h2>Education</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="schoolName">
          <label htmlFor="schoolNameInput">School Name:</label>
          <input 
            type="text"
            name="schoolName"
            value={props.schoolName}
            onChange={props.handleChange}
          />
        </div>
        <div className="courseTitle">
          <label htmlFor="courseTitleInput">Course Title:</label>
          <input 
            type="text"
            name="courseTitle"
            value={props.courseTitle}
            onChange={props.handleChange}
          />
        </div>
        <div className="studyFromDate">
          <label htmlFor="studyFromInput">From:</label>
          <input 
            type="date"
            name="studyFromDate"
            max={maxDate}
            value={props.studyFromDate}
            onChange={props.handleChange}
          />
        </div>
        <div className="studyToDate">
          <label htmlFor="studyToInput">To:</label>
          <input 
            type="date"
            name="studyToDate"
            max={maxDate}
            value={props.studyToDate}
            onChange={props.handleChange}
          />
        </div>
        <AddButton />
      </form>
    </div>
  )
}

function EducationDisplay(props) {
  return (
    <div className="educationDisplay">
    <h2>Education</h2>
    <ul>
      <li>School Name: {props.schoolName}</li>
      <li>Course Title: {props.courseTitle}</li>
      <li>From: {props.studyFromDate}</li>
      <li>To: {props.studyToDate}</li>
    </ul>
    <div className="buttonsContainer">
      <EditButton handleEditClick={props.handleEdit} />
      <AddButton />
    </div>
  </div>
  )
}

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      courseTitle: "",
      studyFromDate: "",
      studyToDate: ""
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
    this.props.onEducationSubmit(this.state, true);
  }

  handleEdit() {
    this.props.onEducationSubmit(this.state, false);
  }

  render() {
    const { 
      schoolName, 
      courseTitle, 
      studyFromDate,
      studyToDate 
    } = this.state;

    if (this.props.educationSubmitted) {
      return (
        <EducationDisplay 
          schoolName={schoolName}
          courseTitle={courseTitle}
          studyFromDate={studyFromDate}
          studyToDate={studyToDate}
          handleEdit={this.handleEdit}
        />
      );
    } else {
      return (
        <EducationForm 
          schoolName={schoolName}
          courseTitle={courseTitle}
          studyFromDate={studyFromDate}
          studyToDate={studyToDate}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }
}

export default Education;