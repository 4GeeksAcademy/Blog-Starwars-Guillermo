import React from "react";
import PropTypes from "prop-types";

const DataCard = ({ dataList }) => {
  if (!dataList) return null;

  return (
    <>
      {dataList.map((data) => (
        <div className="col">
          <div key={data.properties.name} className="card">
            <img src="..." className="card-img-top" alt={data.properties.name} />
            <div className="card-body">
              <h5 className="card-title">{data.properties.name}</h5>
              <p className="card-text">{data.description}</p>
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
