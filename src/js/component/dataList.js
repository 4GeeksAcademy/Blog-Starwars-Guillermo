import React from "react";
import fondosw from "/src/img/fondosw.jpg";

const DataList = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage: `url(${fondosw})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Ensure the div takes the full viewport height
        width: "100vw", // Ensure the div takes the full viewport width
      }}
    >
      <p>Home</p>
    </div>
  );
};

export default DataList;
