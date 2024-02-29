import "../components.css/register.css";

import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 

  function handleSubmit () {
    fetch('http://localhost:8080/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
       
    };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <div>
        <h2>Register</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            autoFocus
            autoComplete="of"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="password"
            name="mobile"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Mobile"
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
     
    </div>
  );
};

export default Register;
