import Word from "../Word/Word";
import "./_WordList.scss";

function WordList() {
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
          <button>Редактировать</button>
          <button>Удалить</button>
        </div>
      </div>
      <Word />
    </div>
  );
}

export default WordList;
