// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email, integrate with a service)
    console.log(formData);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="display-4 text-center mb-5">Contact Me</h2>
        <div className="row">
          <div className="col-md-6 mx-auto">
            {submitted ? (
              <div className="alert alert-success" role="alert">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
