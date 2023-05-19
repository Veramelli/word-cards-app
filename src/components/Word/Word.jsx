import React from "react";
import "./_Word.scss";

export default function Word() {
  return (
    <div className="words__wrapper">
      <div className="word__english">word__english</div>
      <div className="word__transcription">word__transcription</div>
      <div className="word__translation">word__translation</div>
      <div className="word-list__buttons">
        <button>Редактировать</button>
        <button>Удалить</button>
      </div>
    </div>
  );
}
