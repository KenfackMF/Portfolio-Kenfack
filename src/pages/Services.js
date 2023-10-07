import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/services.scss";
import { section3Title, services } from "../data/profile.js";

const Services = () => {
  return (
    <div>
      <div className="services">
        <a id="Services"></a>
        <h2 className="titre-services">{section3Title}</h2>
        <div className="container">
          <div className="row gap-services">
            {services.map((service, index) => (
              <div className="col block-services" key={index}>
                <div className={service.titre.toLowerCase().replace(" ", "-")}>
                  <div className="rond">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 800 800" fill="white">
                      <path d={service.svg} />
                    </svg>
                  </div>
                  <h4>{service.titre}</h4>
                  <p className="skills">{service.paragraph}</p>
                  <p className="outils">{service.outils}</p>
                  <ul>
                    {service.liste.map((outil, i) => (
                      <li key={i}>{outil}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a className="btn btn-primary btn-service" href="../public/Kenfack_CV.pdf" download="mon-cv.pdf" role="button">
          Télécharger mon cv
        </a>
      </div>
    </div>
  );
};

export default Services;
