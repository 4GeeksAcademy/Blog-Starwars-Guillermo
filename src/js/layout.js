import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./views/home";
import injectContext from "./store/appContext";
import PersonajeListDisplay from "./component/personajeListDisplay";
import VehicleListDisplay from "./component/vehicleListDisplay";
import PlanetaListDisplay from "./component/planetaListDisplay";
import DetailCard from "./views/detailCard";
import Navbar from "./component/navbar";
import fondo from "/src/img/404n.jpg";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/personajeListDisplay"
              element={<PersonajeListDisplay />}
            />
            <Route
              path="/vehicleListDisplay"
              element={<VehicleListDisplay />}
            />
            <Route
              path="/planetaListDisplay"
              element={<PlanetaListDisplay />}
            />
            <Route path="/detailCard/:id" element={<DetailCard />} />
            <Route
              path="*"
              element={
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${fondo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100vh",
                  }}
                ></div>
              }
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
