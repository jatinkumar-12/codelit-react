import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <h1 className="page__heading">
          LET’S LEARN & <br />
          WORK TOGETHER.
        </h1>

        <form action="" className="contact__form">
          <p className="contact__pera">Send electronic mail.</p>

          <label htmlFor="occupation" className="contact__form-label">
            Applying As<span className="star">*</span>
          </label>

          <div className="custom-select-wrapper">
            <select className="custom-select">
              <option disabled selected>
                Cliet or Student
              </option>
              <option value="volvo">Student</option>
              <option value="saab">Client</option>
            </select>
          </div>

          <div className="contact__form-name-box">
            <div>
              <label htmlFor="firstname" className="contact__form-label">
                First Name<span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                id="firstname"
                className="contact__form-input"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="contact__form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Doe"
                className="contact__form-input"
              />
            </div>
          </div>

          <label htmlFor="courses" className="contact__form-label">
            Applying For<span className="star">*</span>
          </label>
          <div className="custom-select-wrapper">
            <select className="custom-select">
              <option disabled selected>
                UI/UX, Web-Development etc
              </option>
              <option value="Web-Development">Web-Development</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Figma">Figma</option>
              <option value="PHP">PHP</option>
            </select>
          </div>

          <label htmlFor="email" className="contact__form-label">
            Email ID<span className="star">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="JohnDoe@gmail.com"
            className="contact__form-input"
          />

          <label htmlFor="phone" className="contact__form-label">
            Contact<span className="star">*</span>
          </label>
          <input
            type="text"
            id="phone"
            placeholder="+9198XXXXXXXX"
            className="contact__form-input"
          />

          <label htmlFor="message" className="contact__form-label">
            Message
          </label>
          <textarea
            rows="4"
            cols="5"
            type="text"
            id="message"
            placeholder="Message"
            className="contact__form-input"
          ></textarea>
          <div className="button-Container">
            <button className="about__btn">Submit</button>
            <button className="about__btn">Reset</button>
          </div>
        </form>
      </section>
    </>
  );
}
