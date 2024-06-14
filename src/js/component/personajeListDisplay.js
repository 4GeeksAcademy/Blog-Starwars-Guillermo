import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";

const PersonajeListDisplay = () => {
  const { store } = useContext(Context);

  return <DataCard dataList={store.Personajes} />;
};

export default PersonajeListDisplay;
