import React, { useState } from 'react';

function PersonalInfoForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, profession, city }); // Pass the data to the parent component
  };

  return (
    <>
    <h2 class="font-serif text-lg pl-5 pt-1 text-blue-400">Personal information</h2>
    <form class="container mx-auto font-serif font-normal grid" onSubmit={handleSubmit}>
      <label class="label-data">
        Name:
        <div>
        <input class="input-data"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
      </label>
      <label class="label-data">
        Email:
        <div>
        <input class="input-data"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
      </label>
      <label class="label-data">
        Profession:
        <div>
        <input class="input-data"
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        </div>
      </label>
      <label class="label-data">
        City:
        <address>
        <input class="input-data"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        </address>
      </label>
      <button class="btn-primary" type="submit">Next</button>
    </form>
    </>
  );
}

export default PersonalInfoForm;
