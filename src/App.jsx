import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { word_list } from "./word_list";
import { WholeBoard } from "./Board";
import { Keyboard } from "./Keyboard";

function App() {
  const word = useRef(
    word_list[Math.floor(Math.random() * (word_list.length + 1))]
  );
  console.log(word);
  const [letter, setLetter] = useState("");

  const keyboardClick = (key) => {
    setLetter((letter) => {
      let newLetter = letter + key;
      let firstFiveLetter = newLetter.slice(0, 5);
      return firstFiveLetter;
    });
  };

  return (
    <>
      <p>{letter}</p>
      <WholeBoard letter={letter}></WholeBoard>
      <Keyboard onClick={keyboardClick}></Keyboard>
    </>
  );
}

export default App;
