// import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <>
      <section className="footer" id="Footer">
        <div className="footer__sections">
          {/* <div className="footerLinkBox">
            <h2 className="footerLinkHeading">REACH ME AT</h2>
            <a href="/" className="footerlink">
              email@codelit.in
            </a>
            <h2 className="footerLinkHeading">CAREERS</h2>
            <a href="/" className="footerlink">
              Careers@codelit.in
            </a>
          </div> */}
          <div className="footerLinkBox">
            <h2 className="footerLinkHeading">SERVICES</h2>
            <a href="/" className="footerlink">
              C , C++
            </a>
            <a href="/" className="footerlink">
              Graphic Design
            </a>
            <a href="/" className="footerlink">
              Web Development{" "}
            </a>
            <a href="/" className="footerlink">
              UX/UI Design
            </a>
            <a href="/" className="footerlink">
              Video Editing
            </a>
          </div>
          <div className="footerLinkBox">
            <h2 className="footerLinkHeading">FOLLOW US ON</h2>
            <a href="/" className="footerlink">
              Instagram
            </a>
            <a href="/" className="footerlink">
              X/Twitter
            </a>
            <a href="/" className="footerlink">
              Linkedin
            </a>
          </div>
          <div className="footerLinkBox sm-hide">
            <a onClick={scrollToTop} className="arrow-circle">
              <span className="arrow-up">↑</span>
            </a>
          </div>
        </div>

        <div className="letsConnectSection" id="letsconnect">
          <h2 className="footerLinkHeading">Let's Connect</h2>
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=vipinsinghjnv@gmail.com"
            target="_blank"
            className="footerlink"
          >
            vipinsinghjnv@gmail.com
          </a>
        </div>

        <p className="pera">© CodeLit 2025</p>
      </section>
    </>
  );
}
