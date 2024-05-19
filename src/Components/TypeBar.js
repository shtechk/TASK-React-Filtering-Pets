import React from "react";

const TypeBar = ({ petType }) => {
  return (
    <>
      <br />
      Type:
      <select className="form-select" onChange={petType}>
        <option value="" selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </>
  );
};

export default TypeBar;
