import "../styles/Navbar.css";
import React, { useState } from "react";
import Logo from "../assets/main/Codelit_Logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" /> {/* Replace with your logo */}
        </div>

        <div className="navlink_cont">
          {/* Desktop Links */}
          <div className="nav-links">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>

            <NavLink to="/work" className="nav__link">
              Work
            </NavLink>

            <NavLink to="/codelit" className="nav__link">
              Codelit
            </NavLink>

            <NavLink to="/contact" className="nav__link">
              Contact
            </NavLink>
          </div>

          {/* Right Text */}
          <div className="nav-right">
            <span>Based in India</span>
            <span>Designing worldwide</span>
          </div>
        </div>

        {/* Hamburger Button */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" onClick={toggleMenu}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/codelit" onClick={toggleMenu}>
              Codelit
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

// import "../styles/Navbar.css";
// import { NavLink } from "react-router-dom";
// import hamburger from "../assets/secondary/hamburger.png";
// export default function Navbar() {
//   return (
//     <header id="Navbar">
//       <nav>
//         <NavLink className="nav__logo" to="/">
//           <img src={Logo} width="124px" height="40px" alt="nav__logo-image" />
//         </NavLink>

//         <div className="nav__box tobehide" id="tobehide">
//           <div className="nav__linkbox">
//             <NavLink to="/" className="nav__link">
//               Home
//             </NavLink>
//             <NavLink to="/work" className="nav__link">
//               Work
//             </NavLink>
//             <NavLink to="/codelit" className="nav__link">
//               Codelit
//             </NavLink>
//             <NavLink to="/contact" className="nav__link">
//               Contact
//             </NavLink>
//           </div>

//           <div className="nav__linkbox">
//             <p>Based in India &nbsp;&nbsp; Designing worldwide</p>
//           </div>
//         </div>

//         <div className="hamburger">
//           <img src={hamburger} width="60px" height="60px" />
//         </div>
//       </nav>
//     </header>
//   );
// }
