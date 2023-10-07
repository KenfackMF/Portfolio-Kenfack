import React from "react";
import "../styles/contact.scss";
import logo from "../assets/logo.svg";
import { section5Title, contact } from "../data/profile.js";

const Contact = () => {
  const { pitch } = contact;
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="block-contact">
        <a id="Contact"></a>
        <h2 className="contact-title">{section5Title}</h2>
        <div className="contacts-form">
          <img src={logo} alt="logo-Francis" className="logo-francis" />
          <p className="pitch">{pitch}</p>
          <button className="btn-mail">
            <a href="francis.kenfack@gmail.com">Envoyer un mail</a>
          </button>
          <div className="contact-social-network">
            {/* Ajoutez des liens avec target="_blank" pour ouvrir dans une nouvelle fenêtre */}
            <i className="bi bi-linkedin" onClick={() => openSocialMediaLink("linkedin.com/in/francis-kenfack-momo-1a7414110")}></i>
            <i className="bi bi-twitter-x" onClick={() => openSocialMediaLink("https://twitter.com/Sisquom73")}></i>
            <i className="bi bi-instagram" onClick={() => openSocialMediaLink("https://www.instagram.com/momofrancis/")}></i>
            <i className="bi bi-github" onClick={() => openSocialMediaLink("https://github.com/dashboard")}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
