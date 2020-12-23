import React, { useState } from "react";

function SearchBar({ onFormSubmit }) {
  const [term, seTerm] = useState("");

  function handleChange(event) {
    seTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
