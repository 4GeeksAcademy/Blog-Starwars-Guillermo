import React from "react";
import PropTypes from "prop-types";

const DataCard = ({ dataList }) => {
  if (!dataList) return null;

  return (
    <>
      {dataList.map((data) => (
        <div key={data.uid} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{data.properties.name}</h5>
            <p className="card-text">
              {" "}
              {data.description && <span>{data.description}</span>}
              {data.manufacturer && <span> {data.manufacturer}</span>}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
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
