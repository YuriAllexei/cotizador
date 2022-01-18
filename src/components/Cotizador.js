import React, { useState } from "react";
import { Navbar } from "./Navbar";
import "../styles/cotizador.css";

export const Cotizador = () => {
  const [tablas, settablas] = useState(true);

  return (
    <div className="Cotizador">
      <Navbar />
      <h1 className="tituloCot">
        Bienvenido al inspector del Cotizador de Seguros Los Jefes
      </h1>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input
              type="checkbox"
              className="btn-check"
              id="btncheck1"
              autoComplete="off"
              onClick={() => {
                settablas(!tablas);
              }}
            />
            <label className="btn btn-outline-primary" htmlFor="btncheck1">
              <p className="boton">Resultados importantes</p>
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btncheck2">
              <p className="boton">Resultados importantes</p>
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck3"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-primary boton"
              htmlFor="btncheck3"
            >
              <p className="boton">Limpiar</p>
            </label>
          </div>
          <div className="row">
            <div className="col-8">
              <div className={`container`}></div>
              <iframe
                className={`tabla ${tablas ? "active" : "hidden"}`}
                title="EGTabla1"
                width="1000"
                height="213"
                frameBorder="0"
                scrolling="no"
                src="https://onedrive.live.com/embed?resid=B7A92D37DDE09065%2117819&authkey=%21AHxLrXVF6UdLIqk&em=2&AllowTyping=True&Item='Hoja1'!A1%3AI8&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True"
              ></iframe>

              <iframe
                title="EGTabla 2"
                width="1000"
                className={`tabla ${tablas ? "active" : "hidden"}`}
                height="163"
                frameBorder="0"
                scrolling="no"
                src="https://onedrive.live.com/embed?resid=B7A92D37DDE09065%2117819&authkey=%21AHxLrXVF6UdLIqk&em=2&AllowTyping=True&Item='Hoja1'!A10%3AI15&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
