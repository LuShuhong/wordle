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
  const [guesses, setGuesses] = useState([]);
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
    setGuesses((guesses) => [...guesses, e]);
  };

  console.log(enter);
  return (
    <>
      <p>{letter}</p>
      <p>{guesses}</p>
      <WholeBoard
        letter={letter}
        word={word}
        enter={enter}
        boardNumber={1}
        guesses={guesses}
      ></WholeBoard>
      <WholeBoard
        letter={letter}
        word={word}
        enter={enter}
        boardNumber={2}
        guesses={guesses}
      ></WholeBoard>
      <WholeBoard
        letter={letter}
        word={word}
        enter={enter}
        boardNumber={3}
        guesses={guesses}
      ></WholeBoard>
      <WholeBoard
        letter={letter}
        word={word}
        enter={enter}
        boardNumber={4}
        guesses={guesses}
      ></WholeBoard>
      <WholeBoard
        letter={letter}
        word={word}
        enter={enter}
        boardNumber={5}
        guesses={guesses}
      ></WholeBoard>
      <Keyboard onClick={letterClick}></Keyboard>
      <EnterButton
        letter={letter}
        word={word}
        onClick={enterClick}
        guesses={guesses}
      ></EnterButton>
    </>
  );
}

export default App;
