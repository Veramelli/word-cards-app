import React from "react";
import Card from "../Card/Card";
import WordList from "../WordList/WordList";
import "./_Main.scss";
import words from "../words.json";

export default function Main() {
  return (
    <div className="main">
      <Card word={words} />
      <WordList />
    </div>
  );
}
