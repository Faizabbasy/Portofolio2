import React, { useState } from 'react';
import { FiInfo, FiMail } from 'react-icons/fi';
import { FaPhoneAlt, FaMapMarkerAlt, FaRegCommentDots } from 'react-icons/fa';
import '../components/Contact.css';

const Contact = () => {
  // State untuk menyimpan data input form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handler saat input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handler saat form dikirim (submit)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang dikirim:', formData);
    alert('Message sent successfully!');
    // Reset form setelah submit
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page" id='contact'>
      <div className="contact-container" data-aos="fade-up">
        
        {/* Header Section */}
        <header className="contact-header">
          <h1>Contact</h1>
          <p>Please fill out the form below or reach me via email.</p>
        </header>

        {/* Main Content Section */}
        <div className="contact-wrapper">
          
          {/* Left Side: Information */}
          <div className="contact-info">
            <h2><FiInfo className="title-icon" /> Information</h2>
            
            <div className="info-item">
              <div className="info-icon"><FiMail /></div>
              <div className="info-text">
                <label>Email</label>
                <p>faizabbsy@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div className="info-text">
                <label>Phone</label>
                <p>+62 81290054793</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-text">
                <label>Address</label>
                <p>Bogor, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Right Side: Send a Message Form */}
          <div className="contact-form-container">
            <h2><FaRegCommentDots className="title-icon" /> Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="email@example.com" 
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
                  rows="5" 
                  placeholder="Write your message here..." 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>

              <button type="submit" class="btn-submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;