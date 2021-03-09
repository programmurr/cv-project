import React from 'react';


function AddButton() {
  return (
    <div className="AddButton">
      <button type="submit">Add</button>
    </div>
  );
}

function EditButton(props) {
  return (
    <button onClick={props.handleEditClick}>Edit</button>
  );
}

function ResubmitButton() {
  return (
    <div className="ResubmitButton">
      <button type="submit">Resubmit</button>
    </div>
  );
}

function DeleteButton(props) {
  return (
    <div className="DeleteButton">
      <button onClick={props.handleDeleteClick}>Delete</button>
    </div>
  );
}

export { AddButton, EditButton, ResubmitButton, DeleteButton };