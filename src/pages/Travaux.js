import React from "react";
import "../styles/travaux.scss";
import bookiImage from "../assets/booki.png";
import sophieBluelImage from "../assets/sophie_bluel.png";
import kasaImage from "../assets/kasa.png";
import grimoireImage from "../assets/mon_vieux_grimoire.png";
import { section4Title, projects, section } from "../data/profile.js";

const Travaux = () => {
  return (
    <div>
      <a id="Travaux"></a>

      <div className="block-travaux">
        <h2 className="trav">{section4Title}</h2>
        <div className="btn-group competences">
          {section.map((item, index) => (
            <a href="#" className="btn btn-primary" key={index}>
              {item}
            </a>
          ))}
        </div>
        <div className="grille-travaux ">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              {(() => {
                let projectImage;
                switch (project.id) {
                  case "project1":
                    projectImage = bookiImage;
                    break;
                  case "project2":
                    projectImage = sophieBluelImage;
                    break;
                  case "project4":
                    projectImage = kasaImage;
                    break;
                  case "project5":
                    projectImage = grimoireImage;
                    break;
                  default:
                    projectImage = null;
                }

                return (
                  <>
                    {projectImage && <img src={projectImage} className="card-img-top" alt={project.name} />}
                    <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-description">{project.paragraph}</p>
                      <p className="card-text"> {project.skills.join(", ")}</p>
                      <a href={project.url} className="btn btn-primary">
                        Voir le projet
                      </a>
                    </div>
                  </>
                );
              })()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travaux;
