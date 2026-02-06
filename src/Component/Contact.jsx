import React from "react";


const Contact = () => {
  return (
    <div className="Contact2">
      <h1>Contact Us</h1>
      <p>Feel free to contact us with any questions or concerns.<br></br>
        You can use the form on our website or email us directly.<br></br>
        We appreciate your interest and look forward to hearing from you.</p>

         <form className="contact-form">
        <div className="row">
          <div className="input-box">
            <label>Name <span>*</span></label>
            <input type="text" placeholder="Name" required />
          </div>

          <div className="input-box">
            <label>Email <span>*</span></label>
            <input type="email" placeholder="Email" required />
          </div>
        </div>

        <div className="row">
          <div className="input-box">
            <label>Mobile Number <span>*</span></label>
            <input type="text" placeholder="Mobile Number" required />
          </div>

          <div className="input-box">
            <label>Subject <span>*</span></label>
            <input type="text" placeholder="Subject" required />
          </div>
        </div>

        <div className="input-box">
          <label>Message <span>*</span></label>
          <textarea placeholder="Message" rows="6" required></textarea>
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
      
      <div className="contact1">
        <div className="box">
          <h2>LOCATION</h2>
          <p>
            E-105,XYZ<br />
            ABC Building,<br />
            Surat, Gujarat 123456
          </p>
        </div>

        <div className="box">
          <h2>CONTACT</h2>
          <p>
            We're Available To Assist You <br />
            During Our Business Hours.
          </p>
          <p className="blue">+91 12345 67891</p>
        </div>

        <div className="box">
          <h2>MAIL US</h2>
          <p>
            You Can Reach Us Via Email At <br />
            <span className="blue">travels@gmail.com</span>
          </p>
        </div>
      </div>
    </div>


  );
};

export default Contact;



