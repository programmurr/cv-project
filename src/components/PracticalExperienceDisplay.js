import React from 'react';
import '../styles/PracticalExperience.css'
import EditButton from './EditButton';

class PracticalExperienceDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      positionTitle: "",
      experienceFromDate: "",
      experienceToDate: "",
      responsibilities: ""
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
    this.props.onExperienceSubmit(this.state, false);
  }

  render() {
    const {
      companyName,
      positionTitle,
      experienceFromDate,
      experienceToDate,
      responsibilities
    } = this.props.experienceInfo.info;

    return (
      <div className="experienceDisplay">
        <h2>Experience</h2>
        <ul>
          <li>Organization Name: {companyName}</li>
          <li>Position Title: {positionTitle}</li>
          <li>From: {experienceFromDate}</li>
          <li>To: {experienceToDate}</li>
          <li>Responsibilities: {responsibilities}</li>
        </ul>
        <div className="buttonsContainer">
          <EditButton handleEditClick={this.handleEdit} />
        </div>
      </div>
    );
  }
}

export default PracticalExperienceDisplay;