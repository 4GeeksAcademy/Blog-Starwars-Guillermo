import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";
import fondo from "/src/img/fondoespacio.jpg";
import fondosw from "/src/img/fondosw.jpg";

const VehicleListDisplay = () => {
  const { store } = useContext(Context);

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {store.Vehiculos.length === 0 ? (
        <div>
          <h1 className="text-light">Loading...</h1>
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
