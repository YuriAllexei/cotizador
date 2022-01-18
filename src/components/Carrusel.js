import React from "react";
import "../styles/carrusel.css";
export const Carrusel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://st4.depositphotos.com/18759550/25125/v/600/depositphotos_251252592-stock-illustration-accidental-death-linecolor-illustration.jpg"
            className="d-block w-100 img-thumbnail img-fluid"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <br />
            <h4 className="texto">Cubrimos muerte accidental.</h4>
            <p className="texto">
              No te atrevas a vivir la vida, la muerte nos llega a todos, pero
              con nosotros estarás seguro.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://st4.depositphotos.com/5989012/21497/v/450/depositphotos_214974926-stock-illustration-two-cars-in-accident-and.jpg"
            className="d-block w-100 img-thumbnail img-fluid"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <br />
            <h5 className="texto">Muerete sin preocuparte.</h5>
            <p className="texto">
              Cuando te mueras tus seres queridos estarán protegidos.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
