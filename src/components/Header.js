import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.svg";
import "../styles/header.scss";

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps, no-undef
  const toggleNavbar = useCallback(() => {
    setNavbarOpen(!navbarOpen);
  });

  useEffect(() => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (clickEvent) => {
        if (navbarOpen) {
          toggleNavbar();
        }
        scrollToSection(clickEvent);
      });
    });

    return () => {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", scrollToSection);
      });
    };
  }, [navbarOpen, toggleNavbar]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="#Acceuil">
          <img src={logo} alt="logo-Francis" className="logo-francis" />
        </a>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#Apropos">
                A propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Services">
                Mes services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Travaux">
                Mes travaux
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
