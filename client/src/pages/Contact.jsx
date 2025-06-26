
import React from "react";
import "../styles/contact.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact AccessGuard</h1>
        <p>AccessGuard's solutions take the guesswork out of digital accessibility.</p>
        <hr />
        <h2>We'd love to hear from you!</h2>
        <p>
          At AccessGuard, we have friendly experts who are eager to help you.
          Looking for advice on which digital accessibility tools, services or training
          offers are the best fit for your goals? Let us know in the "How can we help you" field
          to get a fast and tailored response.
        </p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name<span>*</span></label>
          <input type="text" id="firstName" required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name<span>*</span></label>
          <input type="text" id="lastName" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Business Email<span>*</span></label>
          <input type="email" id="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="message">How can we help you?<span>*</span></label>
          <textarea id="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
