import React, { useState } from "react";
import "./_Card.scss";

function Card(props) {
  console.log(props.word.length);
  const [pressed, setPressed] = useState(false);
  const [idWord, setIdWord] = useState(0);
  const word = props.word[idWord];

  function showTranslation() {
    setPressed((prev) => !prev);
  }

  function showPrevWord() {
    setIdWord(idWord - 1);
  }

  function showNextWord() {
    setIdWord(idWord + 1);
  }

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__word">{word.english}</div>

        <div className="card__transcription">{word.transcription}</div>

        {pressed ? (
          <div className="card__translation">{word.russian}</div>
        ) : (
          <button onClick={showTranslation}>Показать перевод</button>
        )}
        <div className="counter">
          {idWord + 1} / {props.word.length}
        </div>
      </div>
      <div className="button__wrapper">
        <button className="button-left" onClick={showPrevWord}></button>
        <button className="button-right" onClick={showNextWord}></button>
      </div>
    </div>
  );
}

export default Card;
