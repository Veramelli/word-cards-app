import React from "react";

export default function WordInputs(props) {
  return (
    <>
      <div className="word__english">
        <input type="text" placeholder={props.word.english} />
      </div>
      <div className="word__transcription">
        <input type="text" placeholder={props.word.transcription} />
      </div>
      <div className="word__translation">
        <input type="text" placeholder={props.word.russian} />
      </div>
    </>
  );
}
