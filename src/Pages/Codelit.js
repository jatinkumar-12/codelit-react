import React from "react";
import "../styles/Codelit.css";

// import images

import aboutImage from "../assets/secondary/about-image.jpg";
import ourStoryImage from "../assets/secondary/our-story-image.jpg";
import employeeImage1 from "../assets/secondary/vipin.jpg";
import employeeImage2 from "../assets/secondary/Jatin.png";
import employeeImage3 from "../assets/secondary/Kanahyia.jpg";

export default function Codelit() {
  return (
    <>
      <section className="about">
        <p className="page__pera">Our Codelit</p>
        <h1 className="page__heading">
          BOLD IDEAS. <br />
          STRONG VISUALS.
        </h1>
        <div className="about__designbox"></div>
        <p className="pera">Our Moto</p>
        <h2 className="about__small-heading first-heading">
          DESIGN, BUILD & EDUCATE
        </h2>
        <p className="about__small-heading-pera">
          At <span>Codelit</span>, our mission is simple — to empower students
          and aspiring professionals with the skills they need to grow, succeed,
          and stay ahead in a fast-changing world.
        </p>
        <div className="about__image-box">
          <img src={aboutImage} alt="about" className="about__image" />
        </div>

        <h2 className="about__small-heading">OUR STORY</h2>
        <div className="about__our-story-boxes">
          <div className="about__our-story-box">
            <h3 className="about__our-story-box-heading">
              Codelit was born from a simple yet powerful vision:
            </h3>
            <p className="about__our-story-box-pera">
              To bridge the gap between academic learning and industry demands.
              We recognized that many talented students struggle to transition
              from theory to practice, lacking the hands-on experience that
              today's competitive market requires.
            </p>
            <p className="about__our-story-box-pera">
              Founded with the mission to help upcoming students add valuable
              skills to their repertoire, Codelit serves as a launchpad for
              career growth and continuous learning in an ever-evolving tech
              landscape.
            </p>
            <p className="about__our-story-box-pera">
              We believe that learning should be progressive, practical, and
              accessible to everyone who has the passion to grow.
            </p>
          </div>
          <div className="about__our-story-box">
            <img src={ourStoryImage} alt="our story" />
          </div>
        </div>

        <h2 className="about__small-heading about__our-team-heading">
          MEET OUR TEAM
        </h2>
        <p className="about__our-team-heading-pera">
          Our diverse team of experienced professionals and passionate educators
          is dedicated to your success.
        </p>
        <div>
          <div className="about__employess-card-box">
            <div className="about__employee-card">
              <div className="about__employee-card-image">
                <img src={employeeImage1} alt="employees" />
              </div>
              <h1>VIPIN KUMAR</h1>
              <p>(B.TECH, NIT KKR)</p>
              <h2>FOUNDER & CEO</h2>
              <p className="pera">
                5+ years in design, development and education
              </p>
            </div>
            <div className="about__employee-card">
              <div className="about__employee-card-image">
                <img src={employeeImage2} alt="employe" />
              </div>
              <h1>JATIN KUMAR</h1>
              <p>(B.Sc, PT. JLN)</p>
              <h2>LEAD DEVELOPER</h2>
              <p className="pera">
                Full-stack expert specializing in modern frameworks
              </p>
            </div>
            <div className="about__employee-card">
              <div className="about__employee-card-image">
                <img src={employeeImage3} alt="employe" />
              </div>
              <h1>KANHIYA SAINI</h1>
              <p>(B.Sc, PT. JLN)</p>
              <h2>LEARNING COORDINATOR</h2>
              <p className="pera">
                Curriculum design and student success specialist
              </p>
            </div>
          </div>

          <h3 className="about__small-heading">OUR MISSION</h3>
          <p className="about__small-pera">
            To provide comprehensive skill development programs that prepare
            students for real-world challenges, fostering both technical
            expertise and professional growth in a supportive learning
            environment.
          </p>

          <h3 className="about__small-heading">OUR VISION</h3>
          <p className="about__small-pera">
            To provide comprehensive skill development programs that prepare
            students for real-world challenges, fostering both technical
            expertise and professional growth in a supportive learning
            environment.
          </p>

          <h3 className="about__small-heading">WHAT WE OFFER</h3>
          <p className="about__small-pera">
            Codelit is more than just a learning platform - it's a comprehensive
            ecosystem designed to nurture talent and create opportunities
          </p>

          <div className="about__skillcard-container">
            <div className="about__skillcard">
              <h2>Skill Development</h2>
              <p className="pera">
                Comprehensive programs designed to build practical skills that
                align with industry standards and market demands.
              </p>
            </div>
            <div className="about__skillcard">
              <h2>Community Learning</h2>
              <p className="pera">
                Join a vibrant community of learners and professionals who
                support each other's growth and success.
              </p>
            </div>
            <div className="about__skillcard">
              <h2>Work Opportunities</h2>
              <p className="pera">
                Connect talented individuals with meaningful work opportunities
                and collaborative projects within our network.
              </p>
            </div>
          </div>

          <h3 className="about__small-heading">
            Ready to Transform Your Future?
          </h3>
          <p className="about__small-pera last-pera">
            Whether you're looking to learn new skills, advance your career, or
            collaborate with like-minded professionals, Codelit is your gateway
            to success. Join our community today and take the first step toward
            your progressive future.
          </p>

          <div className="button-Container">
            <button className="about__btn">Start learning</button>
            <button className="about__btn">Work with us</button>
          </div>
        </div>
      </section>
    </>
  );
}
