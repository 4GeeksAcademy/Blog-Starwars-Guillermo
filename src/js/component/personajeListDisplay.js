import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";
import fondo from "/src/img/fondoespacio.jpg";
import fondosw from "/src/img/fondosw.jpg";

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
        minHeight: "100vh",
      }}
    >
      {store.Personajes.length === 0 ? (
        <div>
          <h1 className="text-light">Loading...</h1>
        </div>
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
