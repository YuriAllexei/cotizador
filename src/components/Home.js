import React from "react";
import { Miembros } from "./Miembros";
import { Navbar } from "./Navbar";
import "../styles/miembros.css";
import { Carrusel } from "./Carrusel";
import "../styles/home.css";
export const Home = () => {
  return (
    <div>
      <div className="background-image">
        <Navbar></Navbar>
        <h2 className="gh">Perssone security</h2>
        <p className="gh">
          Seremos el único producto que en verdad cuide de tus seres queridos
        </p>
        <h3 className="gh">
          Nuestro equipo de expertos se pone a tu disposición:
        </h3>
        <br />
        <Miembros></Miembros>
        <br />

        <Carrusel></Carrusel>

        <br />

        <h2 className="segs">Pero, ¿Que son los seguros?</h2>
        <div className="container">
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KqXYQxwQ_Oo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
