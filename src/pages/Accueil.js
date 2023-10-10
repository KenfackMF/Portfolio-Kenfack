import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/image_1.jpg";
import "../styles/accueil.scss";

const Accueil = () => {
  return (
    <div>
      <div className="block-acceuil">
        <a id="Accueil"></a>
        <div className=" big-picture">
          <img src={image} alt="photo_ordinateur" />
        </div>
        <p className="vers_travaux">Voir mes travaux</p>
        <FontAwesomeIcon icon={faChevronDown} className="chevron" />
      </div>
    </div>
  );
};

export default Accueil;
