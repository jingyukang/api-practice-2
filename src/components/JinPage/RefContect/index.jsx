import React from "react";
import { divStyle } from "..";

const RefContect = ({ p }) => {
  return (
    <div style={divStyle}>
      <div>
        <p>
          <b>{p.name}</b>
        </p>
        <p>{p.position}</p>
      </div>
      <div style={{ width: "60%" }}>
        <div style={divStyle}>
          <p>{p.company}</p>
          <p>{p.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default RefContect;
