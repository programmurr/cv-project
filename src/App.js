import React, { useState } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo'
import EducationDisplay from './components/EducationDisplay'
import EducationForm from './components/EducationForm'
import PracticalExperienceDisplay from './components/PracticalExperienceDisplay'
import PracticalExperienceForm from './components/PracticalExperienceForm'


function App() {
  const [ generalInfo, setGeneralInfo ] = useState([]);
  const [ infoSubmitted, setInfoSubmitted ] = useState(false);
  const [ educationInfo, setEducationInfo ] = useState([]);
  const [ experienceInfo, setExperienceInfo ] = useState([]);

  function handleInfoSubmit(info, status) {
    setGeneralInfo([info]);
    setInfoSubmitted(status);
  }

  function handleEducationSubmit(info) {
    const newEducationInfo = educationInfo.concat(info);
    setEducationInfo(newEducationInfo);
  }

  // If below educationInfo schooName (for example) changes from "My Uni" to "My Uni 2" it renders
  // But if user tries to resubmit without changing anything, render doesn't trigger
  // Why isn't react detecting that a new object and then a new array is being made,
  //  and thus triggering a re-render?
  // Have tried various combos of new Array, Object.create, nothing triggers the render
  function handleEducationEdit(info) {
    const index = educationInfo.findIndex((edu => edu.id === info.id));
    educationInfo[index] = info;
    setEducationInfo([...educationInfo]);
  }

  function handleEducationDelete(info) {
    const newEducationInfo = educationInfo.filter((edu => edu.id !== info.id))
    setEducationInfo(newEducationInfo);
  }

  function handleExperienceSubmit(info) {
    const newExperienceInfo = experienceInfo.concat(info);
    setExperienceInfo(newExperienceInfo);
  }

  function handleExperienceEdit(info) {
    const index = experienceInfo.findIndex((exp => exp.id === info.id));
    experienceInfo[index] = info;
    setExperienceInfo([...experienceInfo]);
  }

  function handleExperienceDelete(info) {
    const newExperienceInfo = experienceInfo.filter((exp => exp.id !== info.id));
    setExperienceInfo(newExperienceInfo);
  }

  return (
    <div className="container">
      <div className="containerHeader">
        <h1>CV Builder</h1>
      </div>
      <GeneralInfo 
        info={generalInfo} 
        onInfoSubmit={handleInfoSubmit}
        infoSubmitted={infoSubmitted}
      />
      <h2>Education</h2>
      {educationInfo.length > 0 
        ? educationInfo.map(education => (
            <EducationDisplay
              key={education.id}
              educationInfo={education}
              onEducationEdit={handleEducationEdit}
              onEducationDelete={handleEducationDelete}
            />
        ))
        : <p>Enter your education details below!</p>
        }
      <EducationForm 
        onEducationSubmit={handleEducationSubmit} 
      />
      <h2>Practical Experience</h2>
      {experienceInfo.length > 0
        ? experienceInfo.map(experience => (
            <PracticalExperienceDisplay
              key={experience.id}
              experienceInfo={experience}
              onExperienceEdit={handleExperienceEdit}
              onExperienceDelete={handleExperienceDelete}
            />
        ))
        : <p>Enter your practical experience below!</p>
        }
      <PracticalExperienceForm 
        onExperienceSubmit={handleExperienceSubmit} 
      />
    </div>
  )
}

export default App;
