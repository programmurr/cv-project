import React from 'react';
import '../styles/Education.css';
import EditButton from './EditButton';


class EducationDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      courseTitle: "",
      studyFromDate: "",
      studyToDate: ""
    }

    this.handleChange = this.handleChange.bind(this);
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

  handleEdit() {
    this.props.onEducationSubmit(this.state);
  }

  render() {
    console.log(this.props.educationInfo.info);
    const { 
      schoolName, 
      courseTitle, 
      studyFromDate,
      studyToDate 
    } = this.props.educationInfo.info;

    return (
      <div className="educationDisplay">
        <ul>
          <li>School Name: {schoolName}</li>
          <li>Course Title: {courseTitle}</li>
          <li>From: {studyFromDate}</li>
          <li>To: {studyToDate}</li>
        </ul>
        <div className="buttonsContainer">
          <EditButton handleEditClick={this.handleEdit} />
        </div>
      </div>
    )
  }
}

export default EducationDisplay;