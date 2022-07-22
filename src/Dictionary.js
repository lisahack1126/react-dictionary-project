import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  /*SEARCH WHEN USER SUBMITS-inside search bar*/
  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
