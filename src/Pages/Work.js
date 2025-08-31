import { Link } from "react-router-dom";
import "../styles/Work.css";

// images

import workImage1 from "../assets/projects/Codelit/project-codelit.png";
import workImage2 from "../assets/projects/Feedbick/feedbick-project.png";

export default function Work() {
  document.title = "Codelit | Work";
  return (
    <>
      <section className="work">
        <p className="page__pera">Lets Take A Look.</p>
        <h1 className="page__heading">
          GET A GLIMPSE OF
          <br />
          MY SELECTED WORK
        </h1>

        <div className="work__projects">
          <div className="work__project">
            <div className="work__project-sm">
              <img
                src={workImage1}
                alt="work"
                className="work__project-sm-img"
              />
            </div>
            <div className="work__project-sm">
              <div>
                <h2>code was born from a simple yet powerful vision:</h2>
                <p>
                  To bridge the gap between academic learning and industries
                  demands. we recognise that many tallented students struggels
                  from transition from theroy to.
                </p>
                <h4>
                  <span>Mission :</span> Frontend Development
                </h4>
              </div>
              <Link to="/work/projectcodelit" className="Explore_btn">
                Explore All Works
              </Link>
            </div>
          </div>
          <div className="work__project">
            <div className="work__project-sm">
              <img
                src={workImage2}
                alt="work"
                className="work__project-sm-img"
              />
            </div>
            <div className="work__project-sm">
              <div>
                <h2>code was born from a simple yet powerful vision:</h2>
                <p>
                  To bridge the gap between academic learning and industries
                  demands. we recognise that many tallented students struggels
                  from transition from theroy to.
                </p>
                <h4>
                  <span>Mission :</span> Frontend Development
                </h4>
              </div>
              <Link to="/work/projectfeedbick" className="Explore_btn">
                Explore All Works
              </Link>
            </div>
          </div>

          {/* <div className="work__project">
            <div className="work__project-sm">
              <img
                src={workImage1}
                alt="work image 3"
                className="work__project-sm-img"
              />
            </div>
            <div className="work__project-sm">
              <h2>code was born from a simple yet powerful vision:</h2>
              <p>
                To bridge the gap between academic learning and industries
                demands. we recognise that many tallented students struggels
                from transition from theroy to.
              </p>
              <h4>
                <span>Mission :</span> Frontend Development
              </h4>
              <button className="Explore_btn">Explore All Works</button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
