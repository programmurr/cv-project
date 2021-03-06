import React from 'react';
import '../styles/Education.css';
import { AddButton }from './Buttons';
import uniqid from 'uniqid';
import dateValidator from './dateValidator';


class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uniqid(),
      schoolName: "",
      courseTitle: "",
      studyFromDate: "",
      studyToDate: "",
      editClicked: false
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
    const validated = dateValidator(this.state.studyFromDate, this.state.studyToDate);
    
    if (validated) {
      this.props.onEducationSubmit(this.state);

      this.setState({
        id: uniqid(),
        schoolName: "",
        courseTitle: "",
        studyFromDate: "",
        studyToDate: "",
        editClicked: false
      })
    } else {
      alert("Please enter a valid date");
    }
  }

  render() {
    const maxDate = new Date().toISOString().split("T")[0];

    const { 
      schoolName, 
      courseTitle, 
      studyFromDate,
      studyToDate,
    } = this.state;

    return (
      <div className="educationForm">
        <form onSubmit={this.handleSubmit}>
          <div className="schoolName">
            <label htmlFor="schoolNameInput">School Name:</label>
            <input 
              type="text"
              name="schoolName"
              required="required" 
              value={schoolName}
              onChange={this.handleChange}
            />
          </div>
          <div className="courseTitle">
            <label htmlFor="courseTitleInput">Course Title:</label>
            <input 
              type="text"
              name="courseTitle"
              required="required" 
              value={courseTitle}
              onChange={this.handleChange}
            />
          </div>
          <div className="studyFromDate">
            <label htmlFor="studyFromInput">From:</label>
            <input 
              type="date"
              name="studyFromDate"
              required="required"
              max={maxDate}
              value={studyFromDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="studyToDate">
            <label htmlFor="studyToInput">To:</label>
            <input 
              type="date"
              name="studyToDate"
              required="required"
              max={maxDate}
              value={studyToDate}
              onChange={this.handleChange}
            />
          </div>
          <AddButton />
        </form>
      </div>
    )

  }
}

export default EducationForm;