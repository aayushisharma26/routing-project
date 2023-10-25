import "./Register.css";
import React, { useState } from 'react';

function MyComponent() {
  const [inputData, setInputData] = useState({ name: '', email: '' });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/registerpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response:', data);
        setInputData(data)
        alert("register is successfull")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={inputData.name}
        onChange={(e) => handleData(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={inputData.email}
        onChange={(e) => handleData(e.target.value)}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter password"
        value={inputData.password}
        onChange={(e) => handleData(e.target.value)}
      />

      <div className="button" onClick={handleSubmit}>
        Register
      </div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
  







  
}

export default MyComponent;
