import React, { useEffect, useState } from 'react';
import { AddButton, EditButton } from './Buttons';
import useFormInput from '../utils/useFormInput'

function GeneralInfoForm(props) {
  return (
    <div className="generalInfoForm">
      <h2>General Info</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="generalInfoName">
          <label htmlFor="nameInput">Name: </label>
          <input 
            type="text" 
            name="name" 
            required="required"
            value={props.name}
            onChange={props.handleNameChange}
          />
        </div>
        <div className="generalInfoEmail">
          <label htmlFor="emailInput">Email: </label>
          <input 
            type="email" 
            name="email"
            required="required" 
            value={props.email}
            onChange={props.handleEmailChange}
          />
        </div>
        <div className="generalInfoPhone">
          <label htmlFor="PhoneInput">Phone: </label>
          <input 
            type="text" 
            name="phone" 
            required="required"
            pattern="[0-9]{9,13}"
            value={props.phone}
            onChange={props.handlePhoneChange}
          />
        </div>
        <AddButton />
      </form>
    </div>
  )
}

function GeneralInfoDisplay(props) {
  return (
    <div className="generalInfoDisplay">
      <h2>General Info</h2>
      <ul>
        <li>Name: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Phone: {props.phone}</li>
      </ul>
      <EditButton handleEditClick={props.handleEdit}/>
    </div>
  );
}

function GeneralInfo(props) {
  const name = useFormInput("");
  const email = useFormInput("");
  const phone = useFormInput("");

  const [genInfo, setGenInfo] = useState(props.info);
  useEffect(() => {
    setGenInfo({
      name: name.value,
      email: email.value,
      phone: phone.value
    });
  }, [props.info])

  function handleSubmit(e) {
    e.preventDefault();
    props.onInfoSubmit(genInfo, true);
  }

  function handleEdit() {
    props.onInfoSubmit(genInfo, false);
  }

  if (props.infoSubmitted) {
    return (
      <GeneralInfoDisplay 
      name={name.value}
      email={email.value}
      phone={phone.value}
      handleEdit={handleEdit}
      />
    );
  } else {
    return (
      <GeneralInfoForm 
      name={name.value} 
      email={email.value}
      phone={phone.value}
      handleNameChange={name.onChange}
      handleEmailChange={email.onChange}
      handlePhoneChange={phone.onChange}
      handleSubmit={handleSubmit}
      />
    );
  }
}

export default GeneralInfo;