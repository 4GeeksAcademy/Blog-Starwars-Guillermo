import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";

const PersonajeListDisplay = () => {
  const { store } = useContext(Context);

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <DataCard dataList={store.Personajes} />
    </div>
  );
};

export default PersonajeListDisplay;
