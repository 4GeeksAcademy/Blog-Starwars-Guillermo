import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";

const VehicleListDisplay = () => {
  const { store } = useContext(Context);

  return (
    <div>
      {store.Vehiculos.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {store.Vehiculos.map((vehiculo, index) => (
            <DataCard key={index} dataList={[vehiculo]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleListDisplay;
