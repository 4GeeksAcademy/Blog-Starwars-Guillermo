import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import fondosnow from "/src/img/star-wars-backgrounds-31_0a247b7f.jpeg";

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
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage: `url(${fondosnow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="card" style={{ width: "18rem" }}>
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
        <div className="card-body">
          <h5 className="card-title">{element.properties.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <Link to="#" className="card-link">
            Card link
          </Link>
          <Link to="#" className="card-link">
            Another link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
