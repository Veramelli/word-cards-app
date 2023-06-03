import React, { useState } from "react";
import "./_Card.scss";

function Card() {
  const [pressed, setPressed] = useState(false);

  function showTranslation() {
    setPressed((prev) => !prev);
  }

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__word">move</div>
        <div className="card__transcription">[ muːv ]</div>
        {pressed ? (
          <div className="card__translation">двигать</div>
        ) : (
          <button onClick={showTranslation}>Показать перевод</button>
        )}
      </div>
    </div>
  );
}

export default Card;
