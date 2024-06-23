import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const DataCard = ({ dataList }) => {
  const { store, actions } = useContext(Context);

  const getImageSource = (data) => {
    if (data._id === "5f7254c11b7dfa00041c6fae") {
      return store.ImagenesPlanetas.tatooine;
    } else {
      const type =
        data.description === "A person within the Star Wars universe"
          ? "characters"
          : "vehicles";
      return `https://starwars-visualguide.com/assets/img/${imagenSelect(
        data.description
      )}/${data.uid}.jpg`;
    }
  };

  const imagenSelect = (element) => {
    if (element === "A person within the Star Wars universe") {
      return "characters";
    } else if (element === "A vehicle") {
      return "vehicles";
    } else {
      return "planets";
    }
  };

  const isFavorite = (id) => {
    return store.Favoritos.some((element) => element._id === id);
  };

  const handleFavoriteClick = (data) => {
    if (isFavorite(data._id)) {
      actions.deleteFav(data._id);
    } else {
      actions.addFav(data);
    }
  };

  if (!dataList || dataList.length === 0) return null;

  return (
    <>
      {dataList.map((data) => (
        <div
          key={data._id}
          className="col d-flex justify-content-center bg-transparent"
        >
          <div className="card h-100 w-75 bg-transparent">
            <div
              className="d-flex justify-content-center rounded bg-transparent"
              style={{ overflow: "hidden", height: "270px" }}
            >
              <img
                src={getImageSource(data)}
                className="img-fluid"
                alt={data.properties.name}
              />
            </div>
            <div className="card-body bg-dark text-light rounded">
              <div>
                <h5 className="card-title">{data.properties.name}</h5>
                <p className="card-text">{data.description}</p>
              </div>
              <div className="p-2 d-flex justify-content-between">
                <Link to={`/detailCard/${data._id}`} className="btn btn-info">
                  Info
                </Link>
                <button
                  className="btn"
                  onClick={() => handleFavoriteClick(data)}
                >
                  {isFavorite(data._id) ? (
                    <i
                      className="fa-solid fa-bookmark fa-xl"
                      style={{ color: "#fafafa" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-regular fa-bookmark fa-xl"
                      style={{ color: "#ffffff" }}
                    ></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

DataCard.propTypes = {
  dataList: PropTypes.array,
};

export default DataCard;
