import React from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo'
import EducationDisplay from './components/EducationDisplay'
import EducationForm from './components/EducationForm'
import PracticalExperienceDisplay from './components/PracticalExperienceDisplay'
import PracticalExperienceForm from './components/PracticalExperienceForm'

// Edit not working
// Add validation for dates e.g. 'to' cannot be less than 'from'
// No blank fields when submitting
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
    this.handleEducationEdit = this.handleEducationEdit.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
  }

  handleInfoSubmit(info, status) {
    const state = this.state;

    this.setState({
      generalInfo: [info],
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
      educationInfo: state.educationInfo.concat(info),
      experienceInfo: state.experienceInfo
    });
  }

  handleEducationEdit(info) {
    const state = Object.assign({}, this.state);
    const index = state.educationInfo.findIndex((edu => edu.id === info.id));
    state.educationInfo[index] = info;
    state.educationInfo[index].editClicked = false;

    this.setState({
      generalInfo: state.generalInfo,
      infoSubmitted: state.infoSubmitted,
      educationInfo: state.educationInfo,
      experienceInfo: state.experienceInfo
    })
  }

  // handleEducationDelete(deleteInfo) {
  //   const stateCopy = this.state;
  //   const {educationInfo: oldInfo} = stateCopy;
  //   const educationInfo = oldInfo.filter((info) => info.id !== deleteInfo.id);
  //   this.setState({
  //     ...stateCopy,
  //     educationInfo
  //   })
  // }

  handleExperienceSubmit(info) {
    const state = this.state;

    this.setState({
      generalInfo: state.generalInfo,
      infoSubmitted: state.infoSubmitted,
      educationInfo: state.educationInfo,
      experienceInfo: state.experienceInfo.concat(info)
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
                key={education.id}
                educationInfo={education}
                onEducationEdit={this.handleEducationEdit}
              />
          ))
          : <p>Enter your education details below!</p>
          }
        <EducationForm 
          educationInfo={educationInfo}
          onEducationSubmit={this.handleEducationSubmit} 
          onEducationEdit={this.handleEducationEdit}
        />
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
