import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";



//import lectt
import full1 from "../img//fullwasah/full1.png";
import full2 from "../img//fullwasah/full2.png";
import full3 from "../img//fullwasah/full3.png";
import full4 from "../img//fullwasah/full4.png";
import full5 from "../img//fullwasah/full5.png";
import full6 from "../img//fullwasah/full6.png";
import full7 from "../img//fullwasah/full7.png";
import full8 from "../img//fullwasah/full8.png";

import lect1 from "../img/lecturista/lect1.JPG";
import lect2 from  "../img/lecturista/lect2.JPG";
import lect3 from  "../img/lecturista/lect3.JPG";
import lect4 from  "../img/lecturista/lect4.JPG";
import lect5 from  "../img/lecturista/lect5.JPG";
import lect6 from  "../img/lecturista/lect6.JPG";

import estado1 from "../img/estado_cuenta/estado1.jpg"
import estado2 from "../img/estado_cuenta/estado2.jpg"
import estado3 from "../img/estado_cuenta/estado3.jpg"
import estado4 from "../img/estado_cuenta/estado4.jpg"

import casapan1 from "../img/casapan/casapan1.jpg"
import casapan2 from "../img/casapan/casapan2.jpg"
import casapan3 from "../img/casapan/casapan3.jpg"
import casapan4 from "../img/casapan/casapan4.jpg"
import casapan5 from "../img/casapan/casapan5.jpg"
import casapan6 from "../img/casapan/casapan6.jpg"
import casapan7 from "../img/casapan/casapan7.jpg"

import pedidos1 from "../img/pedidos/pedidos1.jpg"
import pedidos2 from "../img/pedidos/pedidos2.jpg"
import pedidos3 from "../img/pedidos/pedidos3.jpg"
import pedidos4 from "../img/pedidos/pedidos4.jpg"
import pedidos5 from "../img/pedidos/pedidos5.jpg"

import vecinos1 from "../img/vecinos/vecinos1.png"
import vecinos2 from "../img/vecinos/vecinos2.png"
import vecinos3 from "../img/vecinos/vecinos3.png"
import vecinos4 from "../img/vecinos/vecinos4.png"
import vecinos5 from "../img/vecinos/vecinos5.png"
import vecinos6 from "../img/vecinos/vecinos6.png"

import sube1 from "../img/sube_movil/sube1.jpg"
import sube2 from "../img/sube_movil/sube2.jpg"
import sube3 from "../img/sube_movil/sube3.jpg"
import sube4 from "../img/sube_movil/sube4.jpg"

import sem1 from "../img/sem/sem1.jpg"

import dron1 from "../img/dron/dron1.jpg"
import dron2 from "../img/dron/dron2.jpg"
import dron3 from "../img/dron/dron3.jpg"
import dron4 from "../img/dron/dron4.jpg"

import id1 from "../img/idgroup/id1.jpg"
import id2 from "../img/idgroup/id2.jpg"
import id3 from "../img/idgroup/id3.jpg"
import id4 from "../img/idgroup/id4.jpg"

import natura1 from "../img/natura/natura1.jpg"
import natura2 from "../img/natura/natura2.jpg"
import natura3 from "../img/natura/natura3.jpg"
import natura4 from "../img/natura/natura4.jpg"

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
      <section id="work" className="portfolio-mf portfolio-back sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a titlecolor">Proyectos</h3>
                <p className="subtitle-a titlecolor">
                  
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="work-box">
                <a href={id1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={id1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">ID Group</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Estados de cuentas de clientes de los desarrollos inmobilialiarios pertenecientes al grupo de inversion IDGroup.
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
                <div className="repoinfo">
                  <div>
                <a
                  href="https://github.com/marcespinoza/idgroup_app"
                  target=" _blank"
                  className="btn btn-outline-secondary" >
                <ion-icon name="logo-github"></ion-icon> Repo
               </a>
               </div>
               <div className="languagesinfo">
                <a
                  className="btn btn-outline-secondary" >
                <Language repo_url={"idgroup_app"} />
               </a>
               </div>
               </div>
                <a
                  href={id2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={id3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={id4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
          <div className="col-md-4">
              <div className="work-box">
                <a href={natura1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={natura1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Natura (En desarrollo)</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                           Catalogo de productos de consultoras Natura.
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
                <div className="repoinfo">
                  <div>
                <a
                  href="https://github.com/marcespinoza/Natura_formosa"
                  target=" _blank"
                  className="btn btn-outline-secondary" >
                <ion-icon name="logo-github"></ion-icon> Repo
               </a>
               </div>
               <div className="languagesinfo">
                <a
                  className="btn btn-outline-secondary" >
                <Language repo_url={"Natura_formosa"} />
               </a>
               </div>
               </div>
                <a
                  href={natura2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={natura3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={natura4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={full1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={full1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Infullwash</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Reserva de turnos para lavadero de autos.
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
                <div className="repoinfo">
                  <div>
                <a
                  href="https://github.com/marcespinoza/infullwhas"
                  target=" _blank"
                  className="btn btn-outline-secondary" >
                <ion-icon name="logo-github"></ion-icon> Repo
               </a>
               </div>
               <div className="languagesinfo">
                <a
                  className="btn btn-outline-secondary" >
                <Language repo_url={"infullwhas"} />
               </a>
               </div>
               </div>
                <a
                  href={full2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={full3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={full4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={full5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={full6}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={full7}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={full8}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>              
              
           <div className="col-md-4">
              <div className="work-box">
                <a href={pedidos1} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={pedidos1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">USOFT - Pedidos</h2>
                        <div className="w-more">
                          <span className="w-ctegory"></span>
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
                <div className="repoinfo">
                  <div>
                <a
                  href="https://github.com/marcespinoza/USoftPedidos"
                  target=" _blank"
                  className="btn btn-outline-secondary" >
                <ion-icon name="logo-github"></ion-icon> Repo
               </a>
               </div>
               <div className="languagesinfo">
                <a
                  className="btn btn-outline-secondary" >
                <Language repo_url={"USoftPedidos"} />
               </a>
               </div>
               </div>
                <a
                  href={pedidos2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pedidos3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pedidos4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pedidos5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
           <div className="col-md-4">
              <div className="work-box">
                <a href={vecinos1} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={vecinos1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Vecinos App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            App para la Municipalidad de Resistencia Chaco que permite a los vecinos solicitar lo servicios públicos.
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
                <div className="repoinfo">
                  <div>
                <a
                  href="https://github.com/marcespinoza/vecinos_municipalidadResistencia"
                  target=" _blank"
                  className="btn btn-outline-secondary" >
                <ion-icon name="logo-github"></ion-icon> Repo
               </a>
               </div>
               <div className="languagesinfo">
                <a
                  className="btn btn-outline-secondary" >
                <Language repo_url={"vecinos_municipalidadResistencia"} />
               </a>
               </div>
               </div>
                <a
                  href={vecinos2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={vecinos3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={vecinos4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={vecinos5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={vecinos6}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div> 
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
            <div className="col-md-4">
              <div className="work-box">
                <a href={sem1} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={sem1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Sem Control</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            App con funciones adicionales a la aplicacion oficial del Estacionamiento medido en Formosa.
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
                 <a href="https://play.google.com/store/apps/details?id=com.sem.control" target="_blank">Ver en Play Store</a>
                </span>
               </div>
              </div>
                
              </div>
            </div> 
            <div className="col-md-4">
              <div className="work-box">
                <a href={dron1} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={dron1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Formosa en dron</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Galeria de imagenes de Formosa para descargar y/o compartir.
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
                 <a href="https://play.google.com/store/apps/details?id=com.fsa.en.dron" target="_blank">Ver en Play Store</a>
                </span>
               </div>
              </div>
                <a
                  href={dron2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dron3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dron4}
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
