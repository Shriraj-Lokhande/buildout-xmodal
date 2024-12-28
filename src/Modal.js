// src/Modal.js
import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal({ show, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    if (!show) {
      // Clear the form fields when the modal is closed
      setUsername('');
      setEmail('');
      setPhone('');
      setDob('');
    }
  }, [show]);

  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      alert('Please fill out the username field');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    if (dobDate > today) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    // If all validations pass
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"><strong>Username:</strong></label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email"><strong>Email Address:</strong></label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone"><strong>Phone Number:</strong></label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="dob"><strong>Date of Birth:</strong></label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

