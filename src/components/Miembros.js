import React from "react";
import yeet from "../data/imagenes/yeet.jpg";
import cubanete from "../data/imagenes/cubanete.jpg";
import donita from "../data/imagenes/donita.jpeg";
import mar from "../data/imagenes/mar.jpeg";
import jair from "../data/imagenes/jair.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBible } from "@fortawesome/free-solid-svg-icons/faBible";
import "../styles/miembros.css";

export const Miembros = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card w-20 h-" style={{ width: "18rem" }}>
            <img src={yeet} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
              <h4>Yuri Alexei Villamil</h4>
              <h5 className="card-title">CEO y Hechicero en Jefe</h5>
              <p className="card-text">
                Actuario y Científico de datos experto en sistemas
                computacionales
              </p>
              <a
                href="https://www.instagram.com/yurivillalexei/?hl=es-la"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faBible} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-20 h-" style={{ width: "18rem" }}>
            <img
              src={cubanete}
              className="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <h5>Damián Fuentes Rodríguez</h5>
              <h5 className="card-title">CEO y Hechicero en Jefe</h5>
              <p className="card-text">
                Actuario y Científico de datos experto en sistemas
                computacionales
              </p>
              <a
                href="https://www.instagram.com/yurivillalexei/?hl=es-la"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faBible} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-20 h-" style={{ width: "18rem" }}>
            <img src={mar} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
              <h5>Marylin Llanos Herrera</h5>
              <h5 className="card-title">CEO y Hechicero en Jefe</h5>
              <p className="card-text">
                Actuario y Científico de datos experto en sistemas
                computacionales
              </p>
              <a href="https://www.instagram.com/yurivillalexei/?hl=es-la">
                <FontAwesomeIcon icon={faBible} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <div className="card w-20 h-" style={{ width: "18rem" }}>
            <img
              src={donita}
              className="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <h4>Brenda Ivette Frías</h4>
              <h5 className="card-title">CEO y Hechicero en Jefe</h5>
              <p className="card-text">
                Actuario y Científico de datos experto en sistemas
                computacionales
              </p>
              <a href="https://www.instagram.com/yurivillalexei/?hl=es-la">
                <FontAwesomeIcon icon={faBible} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-20 h-" style={{ width: "18rem" }}>
            <img src={jair} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
              <h4>Jair Castañeda Rioja </h4>
              <h5 className="card-title">CEO y Hechicero en Jefe</h5>
              <p className="card-text">
                Actuario y Científico de datos experto en sistemas
                computacionales
              </p>
              <a
                href="http://instagram.com/j.erick_26?utm_source=qra"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faBible} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-20 h-" style={{ width: "18rem" }}>
            <img src={yeet} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
              <h4>Jonathan Erick Matías</h4>
              <h5 className="card-title">CEO y Hechicero en Jefe</h5>
              <p className="card-text">
                Actuario y Científico de datos experto en sistemas
                computacionales
              </p>
              <a href="https://www.instagram.com/yurivillalexei/?hl=es-la">
                <FontAwesomeIcon icon={faBible} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
