import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/header.scss";

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1); // Récupère l'ID de la section cible
  const targetElement = document.getElementById(targetId); // Récupère l'élément cible

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" }); // Effectue le défilement doux
  }
}

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (clickEvent) => {
        if (navbarOpen) {
          toggleNavbar(); // Ferme la barre de navigation si elle est ouverte
        }
        scrollToSection(clickEvent);
      });
    });

    // Retirez les gestionnaires d'événements lors du démontage du composant
    return () => {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", scrollToSection);
      });
    };
  }, [navbarOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="#Acceuil">
          <img src={logo} alt="logo-Francis" className="logo-francis" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Utilisez le gestionnaire d'événements pour basculer l'état de la barre de navigation
          aria-label="Toggle navigation"
        >
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
