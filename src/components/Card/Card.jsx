import React, { useState } from "react";
import "./_Card.scss";

function Card() {
  const [pressed, setPressed] = useState(false);

  function showTranslation() {
    setPressed(!pressed);
  }

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__word">move</div>
        <div className="card__transcription">[ muːv ]</div>
        <div className={`card__translation ${pressed ? "visible" : ""}`}>
          двигать
        </div>
        <button className={pressed ? "hidden" : ""} onClick={showTranslation}>
          Показать перевод
        </button>
      </div>
    </div>
  );
}

export default Card;
