import React from 'react';
import '../css/Contact.css'; // For styling

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        {/* Scheduling Button */}
        <div className="schedule-section">
          <p>Want to meet in person or virtually?</p>
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0zY1cB7nyMImJO5q3oSWw4dFtp-o2IiZaCZp1lWHWQ0f4mi8wPBTVttjetrOVsmWCS4nU54amx">
            <button className="schedule-button">Schedule an Appointment</button>
          </a>
          
        </div>
      </div>
    </div>
  );
}

//
export default Contact;