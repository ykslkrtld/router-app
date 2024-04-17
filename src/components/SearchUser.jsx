import React from "react";

const SearchUser = ({ searchPerson, handleSearch }) => {
  return (
    <div className="input-group my-3 w-50 m-auto">
      <span className="input-group-text" id="inputGroup-sizing-default">
        Search
      </span>
      <input
        type="search"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={searchPerson}
        onChange={handleSearch}
     />
    </div>
  );
};

export default SearchUser;
