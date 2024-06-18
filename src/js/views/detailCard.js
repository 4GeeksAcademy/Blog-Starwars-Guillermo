import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const DetailCard = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const element = store.Personajes.find((element) => element._id === params.id);
  console.log(element);
    // const type = () => {
  //   if (dataList[0].description === "A person within the Star Wars universe")
  //     return "Personajes";
  //   else if (dataList[0].description === "A vehicle") return "Vehiculos";
  //   else return "Planetas";
  // };
  return (
    <div className="p-3">
      <h1>{element.properties.name}</h1>
      {/* <img src={store.ImagenesVehiculos[element.properties.name]} className="card-img-top" alt={element.properties.name} /> */}
      <p></p>
    </div>
  );
};

export default DetailCard;
