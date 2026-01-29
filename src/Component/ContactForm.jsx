import React from "react";


const ContactForm = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <div className="row">
        <div className="field">
          <label>Name *</label>
          <input type="text" placeholder="Name" />
        </div>

        <div className="field">
          <label>Email *</label>
          <input type="email" placeholder="Email" />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>Mobile Number *</label>
          <input type="text" placeholder="Mobile Number" />
        </div>

        <div className="field">
          <label>Subject *</label>
          <input type="text" placeholder="Subject" />
        </div>
      </div>

      <div className="field">
        <label>Message *</label>
        <textarea placeholder="Message"></textarea>
      </div>

      <button>Send Message</button>
    </div>
  );
};

export default ContactForm;


