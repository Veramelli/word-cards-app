import React, { useState } from "react";
import "./_Card.scss";

function Card(props) {
  console.log("render"); // оптимизировать рендер компонента, но как?
  const [pressed, setPressed] = useState(false); // состояние кнопки перевода (нажата или нет)
  const [idWord, setIdWord] = useState(0); // состояние индекса полученного слова в массиве
  const word = props.word[idWord]; // получение слова по индексу

  /* изменяет состояние кнопки перевода */
  function showTranslation() {
    setPressed((prev) => !prev);
  }

  /* меняет индекс на 1 меньше (но не меньше 0), возвращает кнопку перевода с состояние false */
  function showPrevWord() {
    idWord === 0 ? setIdWord(0) : setIdWord(idWord - 1);
    setPressed(false);
  }

  /* меняет индекс на 1 больше (но не больше количества элементов массива), возвращает кнопку перевода с состояние false */
  function showNextWord() {
    idWord === props.word.length - 1
      ? setIdWord(props.word.length - 1)
      : setIdWord(idWord + 1);
    setPressed(false);
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
