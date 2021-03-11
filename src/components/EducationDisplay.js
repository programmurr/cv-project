import React, { useState, useEffect } from 'react';
import { EditButton, ResubmitButton, DeleteButton } from './Buttons';
import dateValidator from '../utils/dateValidator';
import useFormInput from '../utils/useFormInput';


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

function EducationDisplay(props) {

  const maxDate = new Date().toISOString().split("T")[0];

  const [ id, setId ] = useState(props.educationInfo.id);
  const [ schoolName, setSchoolName ] = useState(props.educationInfo.schoolName);
  const [ courseTitle, setCourseTitle] = useState(props.educationInfo.courseTitle);
  const [ studyFromDate, setStudyFromDate ] = useState(props.educationInfo.studyFromDate);
  const [ studyToDate, setStudyToDate ] = useState(props.educationInfo.studyToDate);
  const [ editClicked, setEditClicked ] = useState(props.educationInfo.editClicked);

  
  useEffect(() => {
    setId(props.educationInfo.id);
    setSchoolName(props.educationInfo.schoolName);
    setCourseTitle(props.educationInfo.courseTitle);
    setStudyFromDate(props.educationInfo.studyFromDate);
    setStudyToDate(props.educationInfo.studyToDate);

    if (editClicked) {
      setEditClicked(true);
    } else {
      setEditClicked(false);
    }
  }, [editClicked])

  function handleNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleCourseChange(e) {
    setCourseTitle(e.target.value);
  }
  
  function handleFromChange(e) {
    setStudyFromDate(e.target.value);
  }

  function handleToChange(e) {
    setStudyToDate(e.target.value);
  }

  function handleDeleteClick() {
    props.onEducationDelete({
      id: id,
      schoolName: schoolName,
      courseTitle: courseTitle,
      studyFromDate: studyFromDate,
      studyToDate: studyToDate,
      editClicked: editClicked
    });
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const validated = dateValidator(studyFromDate, studyToDate);

    if (validated) {
      props.onEducationEdit({
        id: id,
        schoolName: schoolName,
        courseTitle: courseTitle,
        studyFromDate: studyFromDate,
        studyToDate: studyToDate,
        editClicked: false
      })
    } else {
      alert("Please enter a valid date");
    }
  }
  

  function handleEditClick() {
    setEditClicked(true);
  }

  if (editClicked) {
    return (
      <div className="educationEditForm">
        <form onSubmit={handleEditSubmit}>
          <div className="schoolName">
            <label htmlFor="schoolNameInput">School Name:</label>
            <input 
              type="text"
              name="schoolName"
              required="required"
              value={schoolName}
              onChange={handleNameChange}
            />
          </div>
          <div className="courseTitle">
            <label htmlFor="courseTitleInput">Course Title:</label>
            <input 
              type="text"
              name="courseTitle"
              required="required"
              value={courseTitle}
              onChange={handleCourseChange}
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
              onChange={handleFromChange}
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
              onChange={handleToChange}
            />
          </div>
          <ResubmitButton />
        </form>
      </div>
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
          <EditButton handleEditClick={handleEditClick} />
          <DeleteButton handleDeleteClick={handleDeleteClick} />
        </div>
      </div>
    )
  }
}

class EducationDisplayClass extends React.Component {
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