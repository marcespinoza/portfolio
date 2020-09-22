import React, { useState } from "react";
import Typist from "react-typist";
import {
  FirstName,
  LastName,
  MiddleName,
  devDesc,
  icons,
} from "../components/configurations.json";

const MainBody = () => {
  // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
  const [hoverstatus, setHoverstatus] = useState(
    new Array(icons.length).fill("socialicons")
  );

  const toggleHover = (data) => {
    const newhoverStatus = [...hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicons";
      return setHoverstatus(newhoverStatus);
    }
  };

  return (
    <div>
      <div
        id="home"
        className="title back jumbotron jumbotron-fluid bg-transparent text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <div className="container container-fluid text-center ">
          <h1 className="display-1 titlecolor">
            {FirstName + " " + MiddleName + " " + LastName}
          </h1>
          <Typist className="lead"> {devDesc}</Typist>
          <div className="p-5">
            {icons.map((icon) => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i
                  className={`fa ${icon.image}  fa-3x ${hoverstatus[icon.id]}`}
                  onMouseOver={() => toggleHover({ icon, event: "enter" })}
                  onMouseOut={() => toggleHover({ icon, event: "leave" })}
                />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg"
            href="https://github.com/marcespinoza/portfolio/raw/master/src/cv/CV-MarceloEspinoza.pdf" target="_blank"
            aria-label="Learn more about me"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
