import React from "react";
import Card from "../Card/Card";
import WordList from "../WordList/WordList";
import "./_Main.scss";

export default function Main() {
  return (
    <div className="main">
      <Card />
      <WordList />
    </div>
  );
}
