import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";



import sube1 from "../img/sube_movil/sube1.jpg"
import sube2 from "../img/sube_movil/sube2.jpg"
import sube3 from "../img/sube_movil/sube3.jpg"
import sube4 from "../img/sube_movil/sube4.jpg"

function Portfolio (props)  {

  const Language = ({ languages_url, repo_url }) => {
    const [data, setData] = useState([]);
    const handleRequest = useCallback(async () => {
      try {
        const response = await axios.get("https://api.github.com/repos/marcespinoza/"+repo_url+"/languages");
        return setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }, [languages_url]);
    useEffect(() => {
      handleRequest();
    }, [handleRequest]);
    const array = [];
    let total_count = 0;
    for (let index in data) {
      array.push(index);
      total_count += data[index];
    }
    return (
      <div >        
        {array.length
          ? array.map((language) => (
              <a
                key={language} 
                className="badge badge-light card-link"
                href={repo_url + `/search?l=${language}`}
                target=" _blank"
              >
                {language}:{" "}
                {Math.trunc((data[language] / total_count) * 1000) / 10} %
              </a>
            ))
          : "code yet to be deployed."}
      </div>
    );
  };

    return (
      <section id="work" className="portfolio-mf portfolio-back sect-pt4 route" >
        <div className="container" >
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a titlecolorblanco">Proyecto personal</h3>
                <p className="subtitle-a titlecolor">                  
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center" >               
            <div className="col-md-4">
              <div className="work-box">
                <a href={sube3} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={sube3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Sube Móvil</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Puntos de ventas y recargas de la tarjeta SUBE.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="repo-card-div">
                <div className="repo-left-stat">
                 <span>
                   <ion-icon name="logo-google-playstore"></ion-icon>
                 <a href="https://play.google.com/store/apps/details?id=com.sube.movil" target="_blank">Ver en Play Store</a>
                </span>
               </div>
              </div>
                <a
                  href={sube1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sube2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sube4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div> 
                    </div>
                  </div>               


      </section>
    );
  
}

export default Portfolio;
