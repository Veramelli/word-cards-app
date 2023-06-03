import React, { useState } from "react";
import "./_Word.scss";

export default function Word(props) {
  const [pressed, setPressed] = useState(false);
  function changeWord() {
    setPressed((prev) => !prev);
  }

  return (
    <div className="words__wrapper">
      {pressed ? (
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
      ) : (
        <>
          <div className="word__english">{props.word.english}</div>
          <div className="word__transcription">{props.word.transcription}</div>
          <div className="word__translation">{props.word.russian}</div>
        </>
      )}

      <div className="word-list__buttons">
        <button onClick={changeWord}>
          {pressed ? "Сохранить" : "Редактировать"}
        </button>
        <button>Удалить</button>
      </div>
    </div>
  );
}
