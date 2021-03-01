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
      infoSubmitted: false
    }

    this.handleInfoSubmit = this.handleInfoSubmit.bind(this);
  }

  handleInfoSubmit(info, status) {
    this.setState({
      generalInfo: { info },
      infoSubmitted: status
    });
  }

  render() {
    const { generalInfo, infoSubmitted } = this.state;

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
        <Education />
        <PracticalExperience />
      </div>
    )
  }
}

export default App;
