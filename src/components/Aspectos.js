import React from "react";
import { Navbar } from "./Navbar";
import "../styles/miembros.css";
import { Definiciones } from "./Definiciones";

export const Aspectos = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2>Definiciones actuariales. Para que hablemos el mismo idioma</h2>
      <br />
      <div className="container">
        <Definiciones />
      </div>
    </div>
  );
};
