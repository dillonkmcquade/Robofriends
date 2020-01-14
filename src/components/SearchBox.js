import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--white shadow-5 bg-lightest-blue br4"
        type="search"
        placeholder="search robots.."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
