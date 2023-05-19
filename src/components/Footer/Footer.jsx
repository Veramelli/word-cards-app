import React from "react";
import "./_Footer.scss";
import logo from "./gitHub.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer-link">
          <a href="https://github.com/Veramelli">
            <img className="github-logo" src={logo} alt="GitHub logo" />
          </a>
          <div>My GitHub</div>
        </div>
        <div className="footer__text">
          Created by <a href="https://github.com/Veramelli">VeraMelli</a> 2023
        </div>
      </div>
    </footer>
  );
}
