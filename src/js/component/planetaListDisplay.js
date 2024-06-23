import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";
import fondo from "/src/img/fondoespacio.jpg";
import fondosw from "/src/img/fondosw.jpg";

const PlanetaListDisplay = () => {
  const { store } = useContext(Context);

  return (
    <div
      className="container-fluid py-5"
      style={{
        overflow: "hidden",
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {store.Planetas.length === 0 ? (
        <div
          style={{
            overflow: "hidden",
            backgroundImage: `url(${fondosw})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <p className="text-light">Loading...</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {store.Planetas.map((planeta, index) => (
            <DataCard key={index} dataList={[planeta]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanetaListDisplay;
