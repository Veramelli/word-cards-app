import React from "react";
import "./_Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <div className="header__logo">
          <Link to="/home">
            <img
              src="https://www.yiiframework.com/image/design/logo/yii3_sign.png"
              alt="fgfg"
            />
          </Link>
        </div>
        <div className="header__title">
          <div>Изучай английский вместе с нами</div>
        </div>
      </div>

      <div className="header__nav">
        <nav>
          <ul>
            <li>
              <Link to="/home">Главная</Link>
            </li>
            <li>
              <Link to="/train">Тренироваться</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
