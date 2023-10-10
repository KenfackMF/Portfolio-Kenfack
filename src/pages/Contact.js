import React from "react";
import "../styles/contact.scss";
import logo from "../assets/logo.svg";
import { section5Title, contact } from "../data/profile.js";

const Contact = () => {
  const { pitch } = contact;
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  // Obfusquez l'adresse e-mail ici
  const obfuscatedEmail = "francis.kenfack" + String.fromCharCode(64) + "gmail.com";

  return (
    <div>
      <div className="block-contact">
        <a id="Contact"></a>
        <h2 className="contact-title">{section5Title}</h2>
        <div className="contacts-form">
          <img src={logo} alt="logo-Francis" className="logo-francis" />
          <p className="pitch">{pitch}</p>
          <button className="btn-mail">
            {/* Utilisez la fonction JavaScript pour afficher l'adresse e-mail */}
            <a href={"mailto:" + obfuscatedEmail}>Envoyer un mail</a>
          </button>
          <div className="contact-social-network">
            {/* Ajoutez des liens avec target="_blank" pour ouvrir dans une nouvelle fenêtre */}
            <i className="bi bi-linkedin" onClick={() => openSocialMediaLink("https://www.linkedin.com/in/francis-kenfack-momo-1a7414110")}></i>
            <i className="bi bi-twitter-x" onClick={() => openSocialMediaLink("https://twitter.com/Sisquom73")}></i>
            <i className="bi bi-github" onClick={() => openSocialMediaLink("https://github.com/KenfackMF")}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
