// components/Contact.js
import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-5 text-center display-4">Contact Me</h2>
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-4">Get in Touch</h3>
            <p className="mb-4 lead">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaEnvelope className="me-2 text-primary" /> email@example.com
              </li>
              <li className="mb-3">
                <FaPhoneAlt className="me-2 text-primary" /> +1 (123) 456-7890
              </li>
              <li className="mb-3">
                <FaMapMarkerAlt className="me-2 text-primary" /> City, Country
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            {submitted ? (
              <div className="alert alert-success" role="alert">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
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
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
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
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
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
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;