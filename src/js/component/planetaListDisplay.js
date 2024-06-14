import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";

const PlanetaListDisplay = () => {
  const { store } = useContext(Context);

  return <DataCard dataList={store.Planetas} />;
};

export default PlanetaListDisplay;
