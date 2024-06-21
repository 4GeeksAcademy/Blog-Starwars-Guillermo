import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";
import fondo from "/src/img/fondoespacio.jpg";

const VehicleListDisplay = () => {
  const { store } = useContext(Context);

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {store.Vehiculos.length === 0 ? (
        <div style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh"
        }}>
        <p className="text-light">Loading...</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {store.Vehiculos.map((vehiculo, index) => (
            <DataCard key={index} dataList={[vehiculo]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleListDisplay;
