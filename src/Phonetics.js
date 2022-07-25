import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="opacity-50 font-weight-bold">{props.phonetic.text}</span>
    </div>
  );
}
