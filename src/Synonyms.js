import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul className="synonyms-list">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
