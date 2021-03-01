import React from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import PracticalExperience from './components/PracticalExperience'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phone: ""
      }, 
      infoSubmitted: false,
      educationInfo: {
        schoolName: "",
        courseTitle: "",
        studyFromDate: "",
        studyToDate: ""
      },
      educationSubmitted: false
    }

    this.handleInfoSubmit = this.handleInfoSubmit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
  }

  handleInfoSubmit(info, status) {
    const state = this.state;

    this.setState({
      generalInfo: { info },
      infoSubmitted: status,
      educationInfo: state.education,
      educationSubmitted: state.educationSubmitted
    });
  }

  handleEducationSubmit(info, status) {
    const state = this.state;

    this.setState({
      generalInfo: state.generalInfo,
      infoSubmitted: state.infoSubmitted,
      educationInfo: { info },
      educationSubmitted: status
    });
  }

  render() {
    const { 
      generalInfo, 
      infoSubmitted,
      educationInfo,
      educationSubmitted 
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
        <Education 
          educationInfo={educationInfo}
          onEducationSubmit={this.handleEducationSubmit}
          educationSubmitted={educationSubmitted}
        />
        <PracticalExperience />
      </div>
    )
  }
}

export default App;
