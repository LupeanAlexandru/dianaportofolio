import { useState } from "react";
import emailjs from "emailjs-com";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
        "service_kj5w1kp",
        "template_cbntsie",
        formData,
        "w-m2nt626NmTbQUiD"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-ways">
        <p className="contact-information">Email: dtglammakeup@gmail.com</p>
        <a
          href="https://www.instagram.com/dianatinmakeup/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="instagram-icon"
        >
          <InstagramIcon fontSize="large" />
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <textarea
            name="message"
            placeholder="Message"
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
