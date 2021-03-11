import React from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo'
import EducationDisplay from './components/EducationDisplay'
import EducationForm from './components/EducationForm'
import PracticalExperienceDisplay from './components/PracticalExperienceDisplay'
import PracticalExperienceForm from './components/PracticalExperienceForm'


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
    this.handleEducationDelete = this.handleEducationDelete.bind(this);

    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
    this.handleExperienceEdit = this.handleExperienceEdit.bind(this);
    this.handleExperienceDelete = this.handleExperienceDelete.bind(this);
  }

  handleInfoSubmit(info, status) {
    this.setState({
      generalInfo: [info],
      infoSubmitted: status
    });
  }

  handleEducationSubmit(info) {
    const state = this.state;

    this.setState({
      educationInfo: state.educationInfo.concat(info),
    });
  }

  handleEducationEdit(info) {
    const state = Object.assign({}, this.state);
    const index = state.educationInfo.findIndex((edu => edu.id === info.id));
    state.educationInfo[index] = info;
    // state.educationInfo[index].editClicked = false;

    this.setState({ state })
  }

  handleEducationDelete(info) {
    const state = Object.assign({}, this.state);
    const newEducationInfo = state.educationInfo.filter((edu => edu.id !== info.id));
    
    this.setState({
      educationInfo: newEducationInfo,
    })
  }

  handleExperienceSubmit(info) {
    const state = this.state;

    this.setState({
      experienceInfo: state.experienceInfo.concat(info)
    });
  }

  handleExperienceEdit(info) {
    const state = Object.assign({}, this.state);
    const index = state.experienceInfo.findIndex((exp => exp.id === info.id));
    state.experienceInfo[index] = info;
    state.experienceInfo[index].editClicked = false;

    this.setState({ state })
  }

  handleExperienceDelete(info) {
    const state = Object.assign({}, this.state);
    const newExperienceInfo = state.experienceInfo.filter((exp => exp.id !== info.id));

    this.setState({
      experienceInfo: newExperienceInfo
    })
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
                onEducationDelete={this.handleEducationDelete}
              />
          ))
          : <p>Enter your education details below!</p>
          }
        <EducationForm 
          onEducationSubmit={this.handleEducationSubmit} 
        />
        <h2>Practical Experience</h2>
        {experienceInfo.length > 0
          ? experienceInfo.map(experience => (
              <PracticalExperienceDisplay
                key={experience.id}
                experienceInfo={experience}
                onExperienceEdit={this.handleExperienceEdit}
                onExperienceDelete={this.handleExperienceDelete}
              />
          ))
          : <p>Enter your practical experience below!</p>
          }
        <PracticalExperienceForm 
          onExperienceSubmit={this.handleExperienceSubmit} 
        />
      </div>
    )
  }
}

export default App;
