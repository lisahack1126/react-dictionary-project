import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001a44e7cfee90c4d03828d81d13e1bd28b";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
  }

  /*SEARCH WHEN USER SUBMITS-inside search bar*/
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  /*function that allows the value to change in the search bar 
  when submitted/triggers when user starts typing*/
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  /*RETURN SEEN ON WEBSITE*/
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h4>Dictionary</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="What word would you like to look up?"
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
