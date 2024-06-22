import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import fondo from "/src/img/fondoespacio.jpg";

const DataCard = ({ dataList }) => {
  console.log(dataList);
  if (!dataList) return null;
  const { store, actions } = useContext(Context);

  const imagenSelect = (element) => {
    if (element === "A person within the Star Wars universe") {
      return "characters";
    } else if (element === "A vehicle") {
      return "vehicles";
    } else {
      return "planets";
    }
  };

  return (
    <>
      {dataList.map((data) => (
        <div
          key={data._id}
          className="col d-flex justify-content-center bg-transparent"
        >
          <div className="card h-100 w-75 bg-transparent">
            <div
              className="d-flex justify-content-center bg-transparent rounded"
              style={{
                overflow: "hidden",
                height: "270px",
              }}
            >
              <img
                src={
                  data._id == "5f7254c11b7dfa00041c6fae"
                    ? store.ImagenesPlanetas.tatooine
                    : `https://starwars-visualguide.com/assets/img/${imagenSelect(
                        dataList[0].description
                      )}/${data.uid}.jpg`
                }
                className="img-fluid"
                alt={data.properties.name}
              />
            </div>
            <div className="bg-dark rounded text-light card-body">
              <div className=" ">
                <h5 className="card-title">{data.properties.name}</h5>
                <p className="card-text">{data.description}</p>
              </div>
              <div className="p-2 d-flex justify-content-between bg-dark">
                <Link to={`/detailCard/${data._id}`}>
                  <button type="button" className="btn btn-info">
                    Info
                  </button>
                </Link>
                <button className="btn" onClick={() => actions.addFav(data)}>
                  <i className="fa-regular fa-bookmark fa-xl"></i>
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
