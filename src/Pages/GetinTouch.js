import React from "react";
import "../styles/Getintouch.css";
import getintouchimg from "../assets/secondary/getintouchimg.svg";

function GetinTouch() {
  return (
    <section className="Getintouch">
      <h1 className="page__heading">
        LET'S GET IN
        <br />
        TOUCH
      </h1>
      <p className="page__pera git_pera">Let's connect</p>
      <form>
        <div className="ContactBoxes">
          <div className="ContactBox">
            <img src={getintouchimg} className="getintouchimg"/>
          </div>
          <div className="ContactBox">
            <div className="box">
              <p className="contact-pera">Phone</p>
              <h2>+919582686522</h2>
              <h2>+919899021952</h2>
            </div>
            <div className="box">
              <p className="contact-pera">Email</p>
              <h2>email@codelit.in</h2>
            </div>
            <div className="box">
              <p className="contact-pera">Office</p>
              <h2>Jeevan Nagar , Gounchhi Ballabgarh,Faridabad<br/> Pin - 121004</h2>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default GetinTouch;
