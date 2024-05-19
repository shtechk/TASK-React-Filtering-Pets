import React from "react";

const SearchBar = ({ handleChange }) => {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
