import React from "react";
import Word from "../Word/Word";
import "./_WordList.scss";
import words from "../words.json";

export default function WordList() {
  return (
    <div className="list__wrapper">
      <div className="word__input">
        <div className="word__english">
          <input type="text" />
        </div>
        <div className="word__transcription">
          <input type="text" />
        </div>
        <div className="word__translation">
          <input type="text" />
        </div>
        <div className="word-list__buttons">
          <button>Сохранить</button>
          <button>Удалить</button>
        </div>
      </div>
      {words.map((word) => (
        <Word key={word.id} word={word} />
      ))}
    </div>
  );
}
