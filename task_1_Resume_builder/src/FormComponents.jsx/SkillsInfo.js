import React, { useState } from 'react';

function SkillsInfo({ onSubmit }) {
  const [newSkill, setNewSkill] = useState('');
  const [skillList, setSkillList] = useState([]);

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkillList([...skillList, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skillList];
    updatedSkills.splice(index, 1);
    setSkillList(updatedSkills);
  };

  const handleSkillsSubmit = (e) => {
    e.preventDefault();
    // Pass the skillList data back to the parent component
    onSubmit(skillList);
  };

  return (
    <div class="container mx-auto font-serif font-normal grid">
      <h2 class="text-lg text-blue-400">Skills</h2>
      <div>
        <input
          class="input-data mb-2"
          type="text"
          placeholder="Add a new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button class="btn-primary ml-2" onClick={addSkill}>Add Skill</button>
        
      </div>
      <ul class="list-inside list-disc text-slate-500 w-96">
        {skillList.map((skill, index) => (
          <li class="grid w-full bg-inherit" key={index}>
            <p>{skill} <span><button class="btn-primary mt-0 ml-10 sm:border p-0 m-1 bg-red-500 hover:bg-red-700" onClick={() => removeSkill(index)}>Remove</button>
            </span></p>
            
          </li>
        ))}
      </ul>
      <button class="btn-primary" onClick={handleSkillsSubmit}>Next</button>
    </div>
  );
};

export default SkillsInfo;