// src/App.js

import React, { useState } from 'react';
import './Modal.css';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const dob = event.target.dob.value;

    if (!username || !email || !phone || !dob) {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.includes('@')) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    closeModal(); // Close the modal if all validations pass
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input id="username" type="text" name="username" required />

              <label htmlFor="email">Email Address:</label>
              <input id="email" type="email" name="email" required />

              <label htmlFor="phone">Phone Number:</label>
              <input id="phone" type="tel" name="phone" required />

              <label htmlFor="dob">Date of Birth:</label>
              <input id="dob" type="date" name="dob" required />

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
