import React, { useState } from 'react';
import { AddButton }from './Buttons';
import uniqid from 'uniqid';
import dateValidator from '../utils/dateValidator';
import useFormInput from '../utils/useFormInput';


function EducationForm(props) {
  const maxDate = new Date().toISOString().split("T")[0];
  const [ id, setId ] = useState(uniqid());
  const schoolName = useFormInput("");
  const courseTitle = useFormInput("");
  const studyFromDate = useFormInput("");
  const studyToDate = useFormInput("");
  const [ editClicked, setEditClicked ] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const educationObject = {
      id: id,
      schoolName: schoolName.value,
      courseTitle: courseTitle.value,
      studyFromDate: studyFromDate.value,
      studyToDate: studyToDate.value,
      editClicked: editClicked
    }

    const validated = dateValidator(studyFromDate.value, studyToDate.value);

    if (validated) {
      props.onEducationSubmit(educationObject);

      setId(uniqid())
      schoolName.setValue("");
      courseTitle.setValue("");
      studyFromDate.setValue("");
      studyToDate.setValue("");
      setEditClicked(false)
    } else {
      alert("Please enter a valid date");
    }
  }

  return (
    <div className="educationForm">
      <form onSubmit={handleSubmit}>
        <div className="schoolName">
          <label htmlFor="schoolNameInput">School Name:</label>
          <input 
            type="text"
            name="schoolName"
            required="required" 
            value={schoolName.value}
            onChange={schoolName.onChange}
          />
        </div>
        <div className="courseTitle">
          <label htmlFor="courseTitleInput">Course Title:</label>
          <input 
            type="text"
            name="courseTitle"
            required="required" 
            value={courseTitle.value}
            onChange={courseTitle.onChange}
          />
        </div>
        <div className="studyFromDate">
          <label htmlFor="studyFromInput">From:</label>
          <input 
            type="date"
            name="studyFromDate"
            required="required"
            max={maxDate}
            value={studyFromDate.value}
            onChange={studyFromDate.onChange}
          />
        </div>
        <div className="studyToDate">
          <label htmlFor="studyToInput">To:</label>
          <input 
            type="date"
            name="studyToDate"
            required="required"
            max={maxDate}
            value={studyToDate.value}
            onChange={studyToDate.onChange}
          />
        </div>
        <AddButton />
      </form>
    </div>
  )
}

export default EducationForm;