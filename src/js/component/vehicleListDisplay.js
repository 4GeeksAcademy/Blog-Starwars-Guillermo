import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";
const VehicleListDisplay = () => {
  const { store } = useContext(Context); // Destructuring the store from context

  return <DataCard dataList={store.Vehiculos} />;
};

export default VehicleListDisplay;
