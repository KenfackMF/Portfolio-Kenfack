import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJsSquare, faSass, faNode } from "@fortawesome/free-brands-svg-icons"; // Icônes de marques
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Icône solide

import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/propos.scss";
import image from "../assets/image_3.jpg";
import { about, section2title } from "../data/profile.js";

const APropos = () => {
  // Fonction pour ouvrir un lien dans une nouvelle fenêtre
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <a id="Apropos"></a>,
      <div className="block-apropos-1">
        <h2 className="propos-titre">{section2title}</h2>
        <div className="block-apropos-2">
          <div className="block-gauche">
            <i className="bi bi-award-fill animate-icon"></i>
            <p className="texte-propos">{about.paragraph}</p>
          </div>
          <div className="block-droite">
            <div className="kenfack">
              <div className="image-cercle animate-up-down">
                <img src={image} alt="kenfack" />
              </div>
              <div className="social-network">
                {/* Ajoutez des liens avec target="_blank" pour ouvrir dans une nouvelle fenêtre */}
                <i className="bi bi-linkedin" onClick={() => openSocialMediaLink("https://www.linkedin.com/in/francis-kenfack-momo-1a7414110")}></i>
                <i className="bi bi-twitter-x" onClick={() => openSocialMediaLink("https://twitter.com/Sisquom73")}></i>
                <i className="bi bi-github" onClick={() => openSocialMediaLink("https://github.com/KenfackMF")}></i>
              </div>
            </div>
          </div>
        </div>
        <div id="Skills">
          <div className="skills">
            <div className="icone">
              <FontAwesomeIcon icon={faHtml5} />
              <p>HTML</p>
            </div>
            <div className="icone">
              <FontAwesomeIcon icon={faCss3} />
              <p>CSS</p>
            </div>
            <div className="icone">
              <FontAwesomeIcon icon={faJsSquare} />
              <p>JavaScript</p>
            </div>
            <div className="icone">
              <FontAwesomeIcon icon={faSass} />
              <p>Sass</p>
            </div>
            <div className="icone">
              <FontAwesomeIcon icon={faNode} />
              <p>Node</p>
            </div>
            <div className="icone">
              <FontAwesomeIcon icon={faDatabase} />
              <p>Database</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;
