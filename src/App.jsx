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
  console.log(word);
  const [letter, setLetter] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");
  const [letter5, setLetter5] = useState("");

  const [enter, setEnter] = useState(false);

  const letterClick = (key) => {
    setLetter((letter) => {
      let newLetter = letter + key;
      let firstFiveLetter = newLetter.slice(0, 5);
      return firstFiveLetter;
    });
  };

  const enterClick = (e) => {
    // setLetter((letter) => "");
    setEnter((i) => !i);
  };

  console.log(enter);
  return (
    <>
      <p>{letter}</p>
      <WholeBoard letter={letter} word={word} enter={enter}></WholeBoard>
      <WholeBoard letter={letter2} word={word} enter={enter}></WholeBoard>
      <WholeBoard letter={letter3} word={word} enter={enter}></WholeBoard>
      <WholeBoard letter={letter4} word={word} enter={enter}></WholeBoard>
      <WholeBoard letter={letter5} word={word} enter={enter}></WholeBoard>
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
