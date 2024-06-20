import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";

const PersonajeListDisplay = () => {
  const { store } = useContext(Context);

  return (
    <div>
      {store.Personajes.length === 0 ? (
        <p>Loading...</p>
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
