import React, { useState } from "react";
import "./_Card.scss";

function Card({ word }) {
  console.log("render"); // оптимизировать рендер компонента, но как?
  const [pressed, setPressed] = useState(false); // состояние кнопки "показать перевод"
  const [idWord, setIdWord] = useState(0); // индекс текущего слова
  const { english, transcription, russian } = word[idWord]; //извлечение данных текущего слова из массива

  /* изменяет состояние кнопки "показать перевод" */
  function showTranslation() {
    setPressed((prev) => !prev);
  }

  function changeWord(nextId) {
    if (nextId >= 0 && nextId < word.length) {
      // проверка, что индекс находится в допустимом диапазоне
      setIdWord(nextId); //изменение индекса на новый
      setPressed(false); // изменение состояния кнопки "показать перевод"
    }
  }

  /* меняет индекс на 1 меньше (но не меньше 0), возвращает кнопку перевода с состояние false */
  function showPrevWord() {
    changeWord(idWord - 1);
  }

  /* меняет индекс на 1 больше (но не больше количества элементов массива), возвращает кнопку перевода с состояние false */
  function showNextWord() {
    changeWord(idWord + 1);
  }

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__word">{english}</div>
        <div className="card__transcription">{transcription}</div>
        {pressed ? (
          <div className="card__translation">{russian}</div>
        ) : (
          <button onClick={showTranslation}>Показать перевод</button>
        )}
        <div className="counter">
          {idWord + 1} / {word.length}
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
