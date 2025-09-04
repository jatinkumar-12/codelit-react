import { Link } from "react-router-dom";
import "../styles/SubProjects.css";

// images import
import RightArrow from "../assets/projects/icons/right-arrow.png";
import Project from "../assets/projects/Codelit/Project.png";
import Lowfi from "../assets/projects/Codelit/Low_fi.png";
import Highfi from "../assets/projects/Codelit/high_fi.png";
import Persona1 from "../assets/projects/Codelit/persona1.png";
import Persona2 from "../assets/projects/Codelit/persona2.png";
import Completemain from "../assets/projects/Codelit/Complete_main.png";
import ProcessLaptop from "../assets/projects/process/Process-laptop.svg";
import ProcessPhone from "../assets/projects/process/Process-phone.svg";

export default function Projectcodelit() {
  return (
    <>
      <section className="sub-project_section">
        <div className="back-button-cont">
          <img
            src={RightArrow}
            width="25"
            height="20"
            className="back-icon"
            alt="RightArrow"
          />
          <Link to="/work" className="back-button">
            back to projects
          </Link>
        </div>

        <h1 className="explanation-heading">
          A bold, new website for <br />
          CODELIT, the DESIGN & DeVELOPMENT STARTUP
        </h1>

        <div className="row first">
          <div className="col">
            <h2 className="sub-heading-primary">Project Overview</h2>
            <h2 className="sub-heading-primary">UX - UI DESIGN</h2>
          </div>
          <div className="col">
            <p className="sub-pera">
              Codelit is a creative tech company specializing in design,
              development, and education. The goal was to create a branding
              website that reflects their core identity — modern, user-centric,
              and minimal — while clearly communicating services and values.
            </p>
          </div>
        </div>

        <div className="photo-container">
          <img src={Project} alt="Projects" />
        </div>

        <div className="row3 TIMEFRAME">
          <div className="col">
            <h2 className="sub-heading-primary">TIMEFRAME</h2>
            <p className="sub-pera">4 Weeks</p>
          </div>
          <div className="col">
            <h2 className="sub-heading-primary">My role</h2>
            <p className="sub-pera">
              UX + UI Design, Visual design,
              <br />
              Branding, User flow, Research,
              <br />
              Prototyping + Testing
            </p>
          </div>
          <div className="col">
            <h2 className="sub-heading-primary">Tools</h2>
            <p className="sub-pera">
              Figma, Fig jam, Zoom, Google <br />
              Forms
            </p>
          </div>
        </div>

        <div className="row challenge">
          <div className="col">
            <h2 className="sub-heading-primary">The Challenge</h2>
            <h3 className="sub-heading-secondary">What were the challenges?</h3>
          </div>
          <div className="col">
            <p className="sub-pera">
              The company needed a digital presence that:
            </p>
            <ul>
              <li>
                Clearly communicates its design, development, and training
                servicesY
              </li>
              <li>Builds trust with potential clientsY</li>
              <li>Differentiates from generic agency websitesY</li>
              <li>Ensures simplicity in navigation and user flow.</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2 className="sub-heading-primary">Project Goals</h2>
          </div>
          <div className="col">
            <ul>
              <li>Design a modern, minimal website with intuitive UX.</li>
              <li>Establish a visual identity aligned with Codelit's brandY</li>
              <li>Ensure mobile responsiveness and accessibilityY</li>
              <li>Implement simple and clean navigation structure.</li>
            </ul>
          </div>
        </div>

        <div className="col">
          <h2 className="sub-heading-primary">MY Design Process</h2>
        </div>

        <div className="process-cont">
          <img
            src={ProcessLaptop}
            className="process-image lg-size"
            alt="process-image"
          />
          <img
            src={ProcessPhone}
            className="process-image sm-size"
            alt="process-image"
          />
        </div>

        <div className="row low-margin">
          <div className="col">
            <h2 className="sub-heading-primary">user personas</h2>
          </div>
          <div className="col">
            <ul>
              <li>
                <span>Tech Startup Founder — </span>Looking to hire a one-stop
                design/development teamY
              </li>
              <li>
                <span>Student/Learner — </span> Interested in the training
                services offeredY
              </li>
              <li>
                <span>Small Business Owner — </span>Wants a simple,
                cost-effective website.
              </li>
            </ul>
          </div>
        </div>

        <div className="row2 image-row">
          <div className="col">
            <img src={Persona1} alt="persona1" />
          </div>
          <div className="col">
            <img src={Persona2} alt="persona2" />
          </div>
        </div>

        <div className="design-system-row">
          <h2 className="sub-heading-primary">design system</h2>

          <h1 className="design-system-heading">typography & colours</h1>
          <div className="row2">
            <div className="col">
              <p className="sub-pera">Fonts Used</p>
              <div>
                <h1 className="design-system-heading syne">Syne</h1>
                <p className="sub-pera syne">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz <br />
                  1234567890 <br />
                  !@#$%^&*()
                </p>
              </div>
              <div>
                <h1 className="design-system-heading Montserrat">Montserrat</h1>
                <p className="sub-pera Montserrat">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz <br />
                  1234567890 <br />
                  !@#$%^&*()
                </p>
              </div>
            </div>
            <div className="col">
              <p className="sub-pera">Colors</p>
              <div className="row3">
                <div className="col desgin-system-col">
                  <svg
                    width="88"
                    height="100"
                    viewBox="0 0 88 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48 0C4.80004 0 0 36 0 59.5C0 83 18.0004 100 43.5002 100C63.9001 100 80.5001 74.5 84.0002 65C90.0002 43.3333 91.2 0 48 0Z"
                      fill="#D2302C"
                    />
                  </svg>
                  <p className="sub-pera svg-pera">
                    Primary Colour <br />
                    #D2302C
                  </p>
                </div>
                <div className="col desgin-system-col">
                  <svg
                    width="88"
                    height="100"
                    viewBox="0 0 88 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48 0C4.80004 0 0 36 0 59.5C0 83 18.0004 100 43.5002 100C63.9001 100 80.5001 74.5 84.0002 65C90.0002 43.3333 91.2 0 48 0Z"
                      fill="#1F1F1F"
                    />
                  </svg>

                  <p className="sub-pera svg-pera">
                    Secondary Colour <br />
                    #000000
                  </p>
                </div>
                <div className="col desgin-system-col">
                  <svg
                    width="89"
                    height="102"
                    viewBox="0 0 89 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49 1C5.80004 1 1 37 1 60.5C1 84 19.0004 101 44.5002 101C64.9001 101 81.5001 75.5 85.0002 66C91.0002 44.3333 92.2 1 49 1Z"
                      fill="white"
                      stroke="#9F9F9F"
                    />
                  </svg>

                  <p className="sub-pera svg-pera">
                    BG Colour <br />
                    #FFFFFF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="photo-container">
          <h2 className="sub-heading-primary low-margin">
            Low fidelity wireframe
          </h2>
          <img src={Lowfi} alt="Projects" />
        </div>

        <div className="photo-container">
          <h2 className="sub-heading-primary low-margin">
            High fidelity wireframe
          </h2>
          <img src={Highfi} alt="Projects" />
        </div>

        <div className="photo-container">
          <img src={Completemain} alt="Projects" />
        </div>
      </section>
    </>
  );
}
