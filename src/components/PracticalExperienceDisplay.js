import React, { useEffect, useState } from 'react';
import { EditButton, ResubmitButton, DeleteButton } from './Buttons';
import dateValidator from '../utils/dateValidator';


function PracticalExperienceDisplay(props) {
  const maxDate = new Date().toISOString().split("T")[0];

  const [ id, setId ] = useState(props.experienceInfo.id);
  const [ companyName, setCompanyName ] = useState(props.experienceInfo.companyName);
  const [ positionTitle, setPositionTitle ] = useState(props.experienceInfo.positionTitle);
  const [ experienceFromDate, setExperienceFromDate ] = useState(props.experienceInfo.experienceFromDate);
  const [ experienceToDate, setExperienceToDate ] = useState(props.experienceInfo.experienceToDate);
  const [ responsibilities, setResponsibilities ] = useState(props.experienceInfo.responsibilities);
  const [ editClicked, setEditClicked ] = useState(props.experienceInfo.editClicked);

  useEffect(() => {
    const { 
      id, 
      companyName, 
      positionTitle, 
      experienceFromDate, 
      experienceToDate, 
      responsibilities, 
      editClicked 
    } = props.experienceInfo;

    setId(id);
    setCompanyName(companyName);
    setPositionTitle(positionTitle);
    setExperienceFromDate(experienceFromDate);
    setExperienceToDate(experienceToDate);
    setResponsibilities(responsibilities);
    setEditClicked(editClicked);
  }, [
    props.experienceInfo.id,
    props.experienceInfo.companyName,
    props.experienceInfo.positionTitle,
    props.experienceInfo.experienceFromDate,
    props.experienceInfo.experienceToDate,
    props.experienceInfo.responsibilities,
    props.experienceInfo.editClicked
  ]);

  function handleNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handlePositionChange(e) {
    setPositionTitle(e.target.value);
  }

  function handleFromChange(e) {
    setExperienceFromDate(e.target.value);
  }

  function handleToChange(e) {
    setExperienceToDate(e.target.value);
  }

  function handleResponsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }

  function handleDeleteClick() {
    props.onExperienceDelete({
      id: id,
      companyName: companyName,
      positionTitle: positionTitle,
      experienceFromDate: experienceFromDate,
      experienceToDate: experienceToDate,
      responsibilities: responsibilities,
      editClicked: editClicked
    });
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const validated = dateValidator(experienceFromDate, experienceToDate);

    if (validated) {
      props.onExperienceEdit({
        id: id,
        companyName: companyName,
        positionTitle: positionTitle,
        experienceFromDate: experienceFromDate,
        experienceToDate: experienceToDate,
        responsibilities: responsibilities,
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
    <div className="experienceForm">
      <form onSubmit={handleEditSubmit}>
        <div className="companyName">
          <label htmlFor="companyNameInput">Company Name: </label>
          <input 
            type="text"
            name="companyName"
            required="required"
            value={companyName}
            onChange={handleNameChange}
          />
        </div>
        <div className="positionTitle">
          <label htmlFor="positionTitleInput">Position Title: </label>
          <input 
            type="text"
            name="positionTitle"
            required="required"
            value={positionTitle}
            onChange={handlePositionChange}
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
            onChange={handleFromChange}
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
            onChange={handleToChange}
          />
        </div>
        <div className="responsibilities">
          <label htmlFor="responsibilitiesInput">Responsibilities: </label>
          <textarea
            name="responsibilities"
            required="required"
            value={responsibilities}
            onChange={handleResponsibilitiesChange} 
          />
        </div>
        <ResubmitButton />
      </form>
    </div>
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
          <EditButton handleEditClick={handleEditClick} />
          <DeleteButton handleDeleteClick={handleDeleteClick} />
        </div>
      </div>
    )
  }
}

export default PracticalExperienceDisplay;