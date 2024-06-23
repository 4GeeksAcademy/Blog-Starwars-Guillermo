import React from "react";
import fondospace from "/src/img/fondoespacio.jpg";
import yoda from "/src/img/yoda-1568794702.jpeg";
import vainas from "/src/img/vainas.webp";
import planeta from "/src/img/planeta.jpeg";
import { Link } from "react-router-dom";

const DataList = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        backgroundImage: `url(${fondospace})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="p-5 col-xxl-8">
        <Link to="/personajeListDisplay" className="text-decoration-none">
          <div className="card mb-5">
            <img src={yoda} className="card-img" alt="Yoda" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h2 className="card-title  text-white">Personajes</h2>
            </div>
          </div>
        </Link>
        <Link to="/vehicleListDisplay" className="text-decoration-none">
          <div className="card mb-5">
            <img src={vainas} className="card-img" alt="Vehículos" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h2 className="card-title text-white">Vehículos</h2>
            </div>
          </div>
        </Link>
        <Link to="/planetaListDisplay" className="text-decoration-none">
          <div className="card">
            <img src={planeta} className="card-img" alt="Planetas" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h2 className="card-title text-white">Planetas</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DataList;
