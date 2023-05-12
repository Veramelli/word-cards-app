import "./_Card.scss";

function Card() {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__word">move</div>
        <div className="card__transcription">[ muːv ]</div>
        <div className="card__translation">двигать</div>
        <button>Показать перевод</button>
      </div>
    </div>
  );
}

export default Card;
