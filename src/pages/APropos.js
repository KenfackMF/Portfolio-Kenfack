import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/propos.scss";
import Skills from "../componants/Skills.js";
import image from "../assets/image_3.jpg";
import { about, section2title, skillsBar } from "../data/profile.js";

const APropos = () => {
  // Fonction pour ouvrir un lien dans une nouvelle fenêtre
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <a id="Apropos"></a>,
      <div className="block-apropos">
        <h2 className="propos-titre">{section2title}</h2>
        <div className="bloc-propos">
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
                <i className="bi bi-linkedin" onClick={() => openSocialMediaLink("linkedin.com/in/francis-kenfack-momo-1a7414110")}></i>
                <i className="bi bi-twitter-x" onClick={() => openSocialMediaLink("https://twitter.com/Sisquom73")}></i>
                <i className="bi bi-instagram" onClick={() => openSocialMediaLink("https://www.instagram.com/momofrancis/")}></i>
                <i className="bi bi-github" onClick={() => openSocialMediaLink("https://github.com/dashboard")}></i>
              </div>
            </div>
          </div>
        </div>
        <div id="Skills">
          <div className="row d-flex justify-content-center skills">
            {skillsBar.map((x) => (
              <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;
