import React from "react";

export default function Phonetics(props) {
  console.log(props);

  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      {props.phonetic.text}
    </div>
  );
}
