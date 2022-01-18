import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Aspectos } from "../components/Aspectos";
import { Cotizador } from "../components/Cotizador";
import { Home } from "../components/Home";
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cotizador" element={<Cotizador />}></Route>

        <Route path="/aspectos" element={<Aspectos />}></Route>

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
