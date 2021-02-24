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
      }
    }
  }

  render() {
    const { generalInfo } = this.state;

    return (
      <div className="container">
        <div className="containerHeader">
          <h1>CV Builder</h1>
        </div>
        <GeneralInfo info={generalInfo}/>
        <Education />
        <PracticalExperience />
      </div>
    )
  }
}

export default App;
