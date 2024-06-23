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

  const imagenSelect = (description) => {
    if (description === "A person within the Star Wars universe") {
      return "characters";
    } else if (description === "A vehicle") {
      return "vehicles";
    } else {
      return "planets";
    }
  };

  const getImageSource = () => {
    if (element._id === "5f7254c11b7dfa00041c6fae") {
      return store.ImagenesPlanetas.tatooine;
    } else {
      const type = imagenSelect(element.description);
      return `https://starwars-visualguide.com/assets/img/${type}/${element.uid}.jpg`;
    }
  };

  const renderProperties = () => {
    switch (element.description) {
      case "A person within the Star Wars universe":
        return (
          <>
            <li>Gender: {element.properties.gender}</li>
            <li>Height: {element.properties.height}</li>
            <li>Eye color: {element.properties.eye_color}</li>
            <li>Birth year: {element.properties.birth_year}</li>
            <li>Mass: {element.properties.mass}</li>
          </>
        );
      case "A vehicle":
        return (
          <>
            <li>Model: {element.properties.model}</li>
            <li>Cargo capacity: {element.properties.cargo_capacity}</li>
            <li>Cost in credits: {element.properties.cost_in_credits}</li>
            <li>Manufacturer: {element.properties.manufacturer}</li>
            <li>Vehicle class: {element.properties.vehicle_class}</li>
          </>
        );
      case "A planet.":
        return (
          <>
            <li>Climate: {element.properties.climate}</li>
            <li>Diameter: {element.properties.diameter}</li>
            <li>Gravity: {element.properties.gravity}</li>
            <li>Population: {element.properties.population}</li>
            <li>Terrain: {element.properties.terrain}</li>
          </>
        );
      default:
        return null;
    }
  };

  const handleFavoriteClick = () => {
    if (store.Favoritos.find((fav) => fav._id === element._id)) {
      actions.deleteFav(element._id);
    } else {
      actions.addFav(element);
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
      <div className="d-flex justify-content-center gap-3 mt-5">
        <div>
          <img
            src={getImageSource()}
            className="card-img-top"
            alt={element.properties.name}
          />
        </div>
        <div>
          <h1>{element.properties.name}</h1>
          <ul>{renderProperties()}</ul>
          <div>
            <button className="btn" onClick={handleFavoriteClick}>
              <i
                className={`fa-${
                  store.Favoritos.find((fav) => fav._id === element._id)
                    ? "solid"
                    : "regular"
                } fa-bookmark fa-xl`}
                style={{
                  color: `${
                    store.Favoritos.find((fav) => fav._id === element._id)
                      ? "#fafafa"
                      : "#ffffff"
                  }`,
                }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
