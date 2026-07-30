import React, { useState } from 'react';
import './contactform.css';

function ContactForm() {
  // 1. Group multiple inputs into one state object
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', or 'success'

  // 2. Single handler function for all inputs
  function handleChange(event) {
    const { name, value } = event.target;
    setFields(prev => ({ ...prev, [name]: value }));
  }

  // 3. Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');

    // Fake API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
  }

  // Optional: Allow resetting the form to send another message
  function handleReset() {
    setFields({ name: '', email: '', message: '' });
    setStatus('idle');
  }

  if (status === 'success') {
    return (
      <div className="success-msg">
        <p>✅ Message sent! I will reply soon.</p>
        <button type="button" onClick={handleReset} className="btn btn-secondary">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name} // FIXED: was fields.value
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={fields.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={status === 'sending'} className="btn btn-primary">
          {status === 'sending' ? 'Sending...' : 'Send Message 🚀'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;