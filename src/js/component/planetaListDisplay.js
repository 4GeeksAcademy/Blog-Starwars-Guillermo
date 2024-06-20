import React, { useContext } from "react";
import { Context } from "../store/appContext";
import DataCard from "./dataCard";

const PlanetaListDisplay = () => {
  const { store } = useContext(Context);

  return (
    <div>
      {store.Planetas.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {store.Planetas.map((planeta, index) => (
            <DataCard key={index} dataList={[planeta]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanetaListDisplay;
