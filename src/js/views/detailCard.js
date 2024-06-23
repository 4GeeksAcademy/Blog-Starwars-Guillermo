import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import fondosnow from "/src/img/star-wars-backgrounds-31_0a247b7f.jpeg";
import tatooine from "/src/img/tatooin.jpg";

const DetailCard = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const element =
    store.Personajes.find((element) => element._id === params.id) ||
    store.Vehiculos.find((element) => element._id === params.id) ||
    store.Planetas.find((element) => element._id === params.id);

  console.log(element);

  const imagenSelect = (description) => {
    if (description === "A person within the Star Wars universe") {
      return "characters";
    } else if (description === "A vehicle") {
      return "vehicles";
    } else {
      return "planets";
    }
  };

  if (!element) {
    return (
      <div
        className="container-fluid"
        style={{
          overflow: "hidden",
          backgroundImage: `url(${tatooine})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <p className="text-light">Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="container-fluid p-2"
      style={{
        overflow: "hidden",
        backgroundImage: `url(${fondosnow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className=" d-flex justify-content-center gap-3 mt-5">
        <div>
          <img
            src={
              element._id == "5f7254c11b7dfa00041c6fae"
                ? store.ImagenesPlanetas.tatooine
                : `https://starwars-visualguide.com/assets/img/${imagenSelect(
                    element.description
                  )}/${element.uid}.jpg`
            }
            className="card-img-top"
            alt={element.properties.name}
          />
        </div>
        <div>
          <h1>{element.properties.name}</h1>
          <ul>
            {element.description ===
              "A person within the Star Wars universe" && (
              <>
                <li>Gender: {element.properties.gender}</li>
                <li>Height: {element.properties.height}</li>
                <li>Eye color: {element.properties.eye_color}</li>
                <li>Birth year: {element.properties.birth_year}</li>
                <li>Mass: {element.properties.mass}</li>
              </>
            )}
            {element.description === "A vehicle" && (
              <>
                <li>Model: {element.properties.model}</li>
                <li>Cargo capacity: {element.properties.cargo_capacity}</li>
                <li>Cost in credits: {element.properties.cost_in_credits}</li>
                <li>Manufacturer: {element.properties.manufacturer}</li>
                <li>Vehicle class: {element.properties.vehicle_class}</li>
              </>
            )}
            {element.description === "A planet." && (
              <>
                <li>Climate: {element.properties.climate}</li>
                <li>Diameter: {element.properties.diameter}</li>
                <li>Gravity: {element.properties.gravity}</li>
                <li>Population: {element.properties.population}</li>
                <li>Terrain: {element.properties.terrain}</li>
              </>
            )}
          </ul>
          <div>
            {store.Favoritos.find((fav) => fav._id === element._id) ? (
              <button
                className="btn"
                onClick={() => actions.deleteFav(element._id)}
              >
                <i
                  className="fa-solid fa-bookmark fa-xl"
                  style={{ color: "#fafafa" }}
                ></i>
              </button>
            ) : (
              <button className="btn" onClick={() => actions.addFav(element)}>
                <i
                  className="fa-regular fa-bookmark fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
