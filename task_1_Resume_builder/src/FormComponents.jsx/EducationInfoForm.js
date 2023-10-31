import React, { useState } from 'react';

function EducationInfoForm({ onSubmit }) {
  const [schoolsAttended, setSchoolsAttended] = useState([]);
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState([]);
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value.split('\n')); // Split description by line breaks
  };
  const resetForm = () => {
    setSchool('');
    setDegree('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    setDescription([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = { school, degree, startDate, endDate, location, description};
    setSchoolsAttended((prevSchoolsAttended) => [...prevSchoolsAttended, newEducation]);
    //console.log(schoolsAttended);
    //onSubmit(schoolsAttended);
    resetForm();
  };

  return (
    <div class="container columns-2 font-sans p-2 m-2 border-r-2">
      <div>
        <h2 class="font-serif text-lg pt-1 text-blue-400" >Education</h2>
        <form onSubmit={handleSubmit}>
          <label>
            School:
            <div class="mb-2">
              <input
                class="input-data"
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
          </label>
          <label>
            Degree:
            <div>
              <input
                class="input-data"
                type="text"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </div>
          </label>
          <div class="columns-2 flex my-2 max-w-xl">
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
              />
            </label>
          </div>
          
          <label class="grid mb-2">
              Location:
              <input 
              class="input-data"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)} />
          </label>
          <label class="grid my-2">
            Description (one per line):
            <textarea
              class="my-1 rounded bg-slate-100 w-1/2 max-w-xl"
              value={description.join('\n')}
              onChange={handleDescriptionChange}
              rows={5}
              required
            />
          </label>
          <button class="btn-primary mb-2" type="submit">Add</button>
        </form>
        <hr />
      </div>
      {/* Display the list of work experiences */}
      <div class="border-spacing-2 bg-slate-100 p-2 rounded border-inherit border-2 shadow-lg">
        <div class="rounded my-2">
          <h3 class="uppercase font-bold text-lg underline-offset-2 underline mb-1">Education:</h3>
          <ul class="list-item" >
            {schoolsAttended.map((schools, index) => (
              <li class="mb-2" key={index}>
                <strong>{schools.degree}</strong> - <span>{schools.school}</span>
                <p>{schools.startDate} to {schools.endDate}</p>
                <p>{schools.description.map((desc, index) => 
                  <li class="list-inside list-disc ml-4 text-slate-600" 
                  key={index}>{desc}</li>
                )}</p>  
              </li>
            ))}
          </ul>
          <hr />
        </div>
        <button
          class="btn-primary"
          onClick={() => {
            // Pass work experience data to the parent component
            onSubmit(schoolsAttended);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EducationInfoForm;