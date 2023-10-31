import React, { useState } from 'react';
import PersonalInfoForm from './FormComponents.jsx/PersonalInfoForm';
import WorkExperienceForm from './FormComponents.jsx/WorkExperienceForm';
import Resume from './FormComponents.jsx/Resume';
import EducationInfoForm from './FormComponents.jsx/EducationInfoForm';
import SkillsInfo from './FormComponents.jsx/SkillsInfo';
import Header from './FormComponents.jsx/Header';


function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [skillsInfo, setSkillsInfo] = useState([]);
  const [workExperience, setWorkExperience] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [step, setStep] = useState(1);

  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data);
    setStep(2); // Move to the next step
  };
  const handleSkillsSubmit = (data) => {
    setSkillsInfo(data);
    setStep(3);
  }

  const handleWorkExperienceSubmit = (data) => {
    setWorkExperience(data);
    setStep(4); // Move to the next step
  };
  const handleEducationInfoSubmit = (data) => {
    setEducationInfo(data);
    setStep(5);
  }


  return (
    <div className="App">
      <Header />
      <div>
        {step === 1 && <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />}
        {step === 2 && <SkillsInfo onSubmit={handleSkillsSubmit} />}
        {step === 3 && <WorkExperienceForm onSubmit={handleWorkExperienceSubmit} />}
        {step === 4 && <EducationInfoForm onSubmit={handleEducationInfoSubmit}/>}
        {step === 5 && <Resume personalInfo={personalInfo} skills={skillsInfo} workExperience={workExperience} educationInfo={educationInfo}/>}
      </div> 
    </div>
  );
}

export default App;