import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <hr className="divider" />
      <div className="footer-content-container">
        <p className="footer-content footer-text" style={{color: 'white', fontSize: '14px'}}>Segundo Parra</p>
        <div className="footer-social-icon">
          <ul>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm footer-link"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm footer-link"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm footer-link"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;