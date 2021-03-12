import React, { useState } from 'react';
import { AddButton }from './Buttons';
import uniqid from 'uniqid';
import dateValidator from '../utils/dateValidator';
import useFormInput from '../utils/useFormInput';


function PracticalExperienceForm(props) {
  const maxDate = new Date().toISOString().split("T")[0];

  const [ id, setId ] = useState(uniqid());
  const companyName = useFormInput("");
  const positionTitle = useFormInput("");
  const experienceFromDate = useFormInput("");
  const experienceToDate = useFormInput("");
  const responsibilities = useFormInput("");
  const [ editClicked, setEditClicked ] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const experienceObject = {
      id: id,
      companyName: companyName.value,
      positionTitle: positionTitle.value,
      experienceFromDate: experienceFromDate.value,
      experienceToDate: experienceToDate.value,
      responsibilities: responsibilities.value,
      editClicked: editClicked
    }

    const validated = dateValidator(experienceFromDate.value, experienceToDate.value);

    if (validated) {
      props.onExperienceSubmit(experienceObject);

      setId(uniqid());
      companyName.setValue("");
      positionTitle.setValue("");
      experienceFromDate.setValue("");
      experienceToDate.setValue("");
      responsibilities.setValue("");
      setEditClicked(false);
    } else {
      alert("Please enter a valid date");
    }
  }

  return (
    <div className="experienceForm">
        <form onSubmit={handleSubmit}>
          <div className="companyName">
            <label htmlFor="companyNameInput">Company Name: </label>
            <input 
              type="text"
              name="companyName"
              required="required"
              value={companyName.value}
              onChange={companyName.onChange}
            />
          </div>
          <div className="positionTitle">
            <label htmlFor="positionTitleInput">Position Title: </label>
            <input 
              type="text"
              name="positionTitle"
              required="required"
              value={positionTitle.value}
              onChange={positionTitle.onChange}
            />
          </div>
          <div className="experienceFromDate">
            <label htmlFor="experienceFromInput">From:</label>
            <input 
              type="date"
              name="experienceFromDate"
              required="required"
              max={maxDate}
              value={experienceFromDate.value}
              onChange={experienceFromDate.onChange}
            />
          </div>
          <div className="experienceToDate">
            <label htmlFor="experienceToInput">To:</label>
            <input 
              type="date"
              name="experienceToDate"
              required="required"
              max={maxDate}
              value={experienceToDate.value}
              onChange={experienceToDate.onChange}
            />
          </div>
          <div className="responsibilities">
            <label htmlFor="responsibilitiesInput">Responsibilities: </label>
            <textarea
              name="responsibilities"
              required="required"
              value={responsibilities.value}
              onChange={responsibilities.onChange} 
            />
          </div>
          <AddButton />
        </form>
      </div>
  )
}

export default PracticalExperienceForm;