import React, { Component } from "react";

export class Construction extends Component {
  render() {
    return (
      <div>
        <div id="contact" className="text-center">
          <div className="container">
              <div className="section-title">
                <h2>Ghecce</h2>
                <h1>Sitio en construcción</h1>
              </div>
            <div className="col-md-12">
              <div className="row">
                <div className="contact-item">
                    Somos una empresa curicana dedicada a la fabricación y comercialización de productos textiles, 
                    nos especializamos en uniformes de trabajo, también nos gusta hacer ropa a la moda, comoda y de buena calidad.
                 
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Sus pedidos o consultas a los fonos
                    </span>{" "}
                    (+58)4120916971 / (+569)49250025
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    ghecce.pedidos@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={"https://www.instagram.com/ghecce_/"}
                        rel="noreferrer" 
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Construction;
