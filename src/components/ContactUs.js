// components/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the form data to your backend
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Error sending message:', response.status);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section className="contact-us container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
