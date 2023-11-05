import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { word_list } from "./word_list";
import { WholeBoard } from "./Board";
import { Keyboard } from "./Keyboard";
import { EnterButton } from "./EnterButton";

function App() {
  const word = useRef(
    word_list[Math.floor(Math.random() * (word_list.length + 1))]
  );
  const [letter, setLetter] = useState("");

  const letterClick = (key) => {
    setLetter((letter) => {
      let newLetter = letter + key;
      let firstFiveLetter = newLetter.slice(0, 5);
      return firstFiveLetter;
    });
  };

  const enterClick = (e) => {
    setLetter((letter) => "");
  };

  return (
    <>
      <p>{letter}</p>
      <WholeBoard letter={letter}></WholeBoard>
      <Keyboard onClick={letterClick}></Keyboard>
      <EnterButton
        letter={letter}
        word={word}
        onClick={enterClick}
      ></EnterButton>
    </>
  );
}

export default App;
