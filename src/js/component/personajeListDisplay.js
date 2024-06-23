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
        minHeight: "100vh",
      }}
    >
      {store.Personajes.length === 0 ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <h1 className="text-light">Loading...</h1>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {store.Personajes.map((personaje) => (
            <DataCard key={personaje._id} dataList={[personaje]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PersonajeListDisplay;
