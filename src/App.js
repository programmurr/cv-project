import React from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo'
import EducationDisplay from './components/EducationDisplay'
import EducationForm from './components/EducationForm'
import PracticalExperienceDisplay from './components/PracticalExperienceDisplay'
import PracticalExperienceForm from './components/PracticalExperienceForm'

// refactor App.render() functions so map() takes place outside of render
// Work on 'edit' functionality
// I think each component needs to be given an id when their form is submitted
// Add validation for dates e.g. 'to' cannot be less than 'from'
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      generalInfo: [],
      infoSubmitted: false, 
      educationInfo: [],
      experienceInfo: []
    }

    this.handleInfoSubmit = this.handleInfoSubmit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
  }

  handleInfoSubmit(info, status) {
    const state = this.state;

    this.setState({
      generalInfo: info,
      infoSubmitted: status,
      educationInfo: state.educationInfo,
      experienceInfo: state.experienceInfo
    });
  }

  handleEducationSubmit(info) {
    const state = this.state;

    this.setState({
      generalInfo: state.generalInfo,
      infoSubmitted: state.infoSubmitted,
      educationInfo: state.educationInfo.concat({ info }),
      experienceInfo: state.experienceInfo
    });
  }

  handleExperienceSubmit(info) {
    const state = this.state;

    this.setState({
      generalInfo: state.generalInfo,
      infoSubmitted: state.infoSubmitted,
      educationInfo: state.educationInfo,
      experienceInfo: state.experienceInfo.concat({ info })
    });
  }

  render() {
    const { 
      generalInfo, 
      infoSubmitted,
      educationInfo,
      experienceInfo,
    } = this.state;

    return (
      <div className="container">
        <div className="containerHeader">
          <h1>CV Builder</h1>
        </div>
        <GeneralInfo 
          info={generalInfo} 
          onInfoSubmit={this.handleInfoSubmit}
          infoSubmitted={infoSubmitted}
        />
        <h2>Education</h2>
        {educationInfo.length > 0
          ? educationInfo.map(education => (
              <EducationDisplay
                key={uniqid()}
                educationInfo={education}
                onEducationSubmit={this.handleEducationSubmit}
              />
          ))
          : <p>Enter your education details below!</p>
          }
        <EducationForm onEducationSubmit={this.handleEducationSubmit} />
        <h2>Practical Experience</h2>
        {experienceInfo.length > 0
          ? experienceInfo.map(experience => (
              <PracticalExperienceDisplay
                key={uniqid()}
                experienceInfo={experience}
                onExperienceSubmit={this.handleExperienceSubmit}
              />
          ))
          : <p>Enter your practical experience below!</p>
          }
        <PracticalExperienceForm onExperienceSubmit={this.handleExperienceSubmit} />
      </div>
    )
  }
}

export default App;
