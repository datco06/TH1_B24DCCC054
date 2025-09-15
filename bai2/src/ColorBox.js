
import React from "react";


function ColorBox({ mau }) {
  return (
    <div
      className="ho-mau"
      style={{ backgroundColor: mau, width: "200px", height: "200px" }}
    ></div>
  );
}

export default ColorBox;
