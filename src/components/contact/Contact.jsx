import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_kj5w1kp',        
        'template_cbntsie',       
        formData,                 
        'w-m2nt626NmTbQUiD'            
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form after submission
        },
        () => {
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className='contact-title'>Contact Me</h2>
      
      <p>Email: contact@example.com</p>
      <p>Phone: +123 456 7890</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-field'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-field'>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-field'>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};
