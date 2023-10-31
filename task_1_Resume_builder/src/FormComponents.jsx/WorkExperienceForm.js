import React, { useState } from 'react';

function WorkExperienceForm({ onSubmit }) {
  const [workplaces, setWorkplaces] = useState([]);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [roles, setRoles] = useState([]);
  const [currentlyWorkHere, setCurrentlyWorkHere] = useState(false);
  
  const handleRoleChange = (e) => {
    setRoles(e.target.value.split('\n')); // Split roles by line breaks
  };
  const resetForm = () => {
    setCompany('');
    setPosition('');
    setStartDate('');
    setEndDate('');
    setRoles([]);
    setCurrentlyWorkHere(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*if (!company || !position || !startDate || !endDate) {
      // Add validation logic here to handle required fields
      alert('Please fill in all required fields.');
      return;
    }*/
    const endDateValue = currentlyWorkHere ? 'Current' : endDate;
    const newWorkExperience = { company, position, startDate, endDate: endDateValue, roles};
    setWorkplaces((prevWorkplaces) => [...prevWorkplaces, newWorkExperience]);
    //console.log(workplaces);
    //onSubmit(workplaces);
    resetForm();
  };

  return (
    <div class="container mx-auto columns-1 font-serif">
      <h2 class="font-serif text-lg pt-1 text-blue-400">Work Experience</h2>
      <form class="input-data p-4 columns-1" onSubmit={handleSubmit}>
        <label>
          Company:
          <div>
            <input
              class="input-data"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          
        </label>
        <label>
          Position:
          <div>
            <input
              class="input-data"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </label>
        <div class="columns-2 flex w-auto py-2">
        <label>
          Start Date:
          <input
            class="input-data"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            class="input-data"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={currentlyWorkHere} // Disable if "I currently work here" is selected
            required
          />
        </label>
        <label class="pt-5">
          <input
            class="mr-2"
            type="checkbox"
            checked={currentlyWorkHere}
            onChange={() => setCurrentlyWorkHere(!currentlyWorkHere)}
          />
          currently work here
        </label>
        </div>
        <div>
          <label>
            Roles:
            <div>
              <textarea
                class="w-4/5 list-disc list-inside"
                value={roles.join('\n')}
                onChange={handleRoleChange}
                rows={5}
                required
              />
            </div>
          </label>
        </div>
        <button class="btn-primary" type="submit">Add</button>
      </form>
      <hr />

      {/* Display the list of work experiences */}
      <div class="m-2">
        <h3 class="text-bold underline uppercase">Work Experience:</h3>
        <ul class="list-inside p-1">
          {workplaces.map((workplace, index) => (
            <li class="m-1 pb-1" key={index}>
              <strong>{workplace.company}</strong> - <span class="text-semibold">{workplace.position}</span> 
              <p>{workplace.startDate} - {workplace.endDate}</p>
              <ul class="list-inside list-disc ml-4">{workplace.roles.map((rol, index) => 
                <li key={index}>{rol}</li>
              )}</ul>
            </li>
          ))}
        </ul>
      </div>
      <button
        class="btn-primary"
        onClick={() => {
          // Pass work experience data to the parent component
          onSubmit(workplaces);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default WorkExperienceForm;