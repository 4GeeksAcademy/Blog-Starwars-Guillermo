import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";
const VehicleListDisplay = () => {
  const { store } = useContext(Context); // Destructuring the store from context

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <DataCard dataList={store.Vehiculos} />
    </div>
  );
};

export default VehicleListDisplay;
