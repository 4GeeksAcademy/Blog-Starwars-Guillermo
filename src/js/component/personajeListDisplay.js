import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";
import fondo from "/src/img/fondoespacio.jpg";

const PersonajeListDisplay = () => {
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
      {store.Personajes.length === 0 ? (
        <p className="text-light">Loading...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {store.Personajes.map((personaje, index) => (
            <DataCard key={index} dataList={[personaje]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PersonajeListDisplay;
