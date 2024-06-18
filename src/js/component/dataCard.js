import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

// store.ImagenesPersonajes[data.properties.name]

const DataCard = ({ dataList }) => {
  if (!dataList) return null;
  const { store } = useContext(Context);

  const imagenSelect = () => {
    if (dataList[0].description === "A person within the Star Wars universe")
      return "ImagenesPersonajes";
    else if (dataList[0].description === "A vehicle")
      return "ImagenesVehiculos";
    else return "ImagenesPlanetas";
  };

  {
    console.log(dataList[0].description);
  }
  return (
    <>
      {dataList.map((data) => (
        <div key={data._id} className="col">
          <div className="card">
            <div style={{ overflow: "hidden", height: "270px" }}>
              <img
                src={
                  store[imagenSelect(data.description)][data.properties.name]
                }
                className="card-img-top img-fluid"
                alt={data.properties.name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.properties.name}</h5>
              <p className="card-text">{data.description}</p>
            </div>
            <div className="p-2">
              <Link to={`/detailCard/${data._id}`}>
                <button type="button" className="btn btn-info">
                  Info
                </button>
              </Link>
              <span>
                <i className="fa-regular fa-bookmark"></i>
              </span>
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
