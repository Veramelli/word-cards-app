import React from "react";
import "./_Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <div className="header__logo">
          <img
            src="https://www.yiiframework.com/image/design/logo/yii3_sign.png"
            alt="fgfg"
          />
        </div>
        <div className="header__title">
          <div>Изучай английский вместе с нами</div>
        </div>
      </div>

      <div className="header__nav">
        <nav>
          <ul>
            <li>
              <a href="http://">Главная</a>
            </li>
            <li>
              <a href="http://">Тренироваться</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
