import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import PersonajeListDisplay from "./component/personajeListDisplay";
import VehicleListDisplay from "./component/vehicleListDisplay";
import PlanetaListDisplay from "./component/planetaListDisplay";
import DetailCard from "./views/detailCard";

import Navbar from "./component/navbar";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajeListDisplay" element={<PersonajeListDisplay />} />
            <Route path="/vehicleListDisplay" element={<VehicleListDisplay />} />
            <Route path="/planetaListDisplay" element={<PlanetaListDisplay />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/detailCard/:id" element={<DetailCard />} /> {/* Route for DetailCard */}
            <Route path="*" element={<h1>Estos no son los androides que buscáis!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
