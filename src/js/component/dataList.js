import React from "react";
import fondospace from "/src/img/fondoespacio.jpg";
import yoda from "/src/img/yoda-1568794702.jpeg";
import vainas from "/src/img/vainas.webp";
import planeta from "/src/img/planeta.jpeg";
import { Link } from "react-router-dom";

const DataList = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage: `url(${fondospace})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="p-5">
        <Link to="/personajeListDisplay">
          <div className="card text-bg-dark mb-5">
            <img src={yoda} className="card-img" alt="Yoda" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h2 className="card-title">Personajes</h2>
            </div>
          </div>
        </Link>
        <Link to="/vehicleListDisplay">
          <div className="card text-bg-dark mb-5">
            <img src={vainas} className="card-img" alt="Vehículos" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h2 className="card-title">Vehículos</h2>
            </div>
          </div>
        </Link>
        <Link to="/planetaListDisplay">
          <div className="card text-bg-dark">
            <img src={planeta} className="card-img" alt="Planetas" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h2 className="card-title">Planetas</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DataList;
