import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  /*SEARCH WHEN USER SUBMITS-inside search bar*/
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);
  }

  /*function that allows the value to change in the search bar 
  when submitted/triggers when user starts typing*/
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  /*RETURN SEEN ON WEBSITE*/
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
