import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { word_list } from "./word_list";
import { WholeBoard } from "./Board";
import { Keyboard } from "./Keyboard";
import { EnterButton } from "./EnterButton";
import { DelButton } from "./DelButton";

function App() {
  const word = useRef(
    word_list[Math.floor(Math.random() * (word_list.length + 1))]
  );
  console.log(word);
  // the letter state is not neccesaily needed
  const [letter, setLetter] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [enter, setEnter] = useState(true);

  const letterClick = (key) => {
    setLetter((letter) => {
      let newLetter = letter + key;
      let firstFiveLetter = newLetter.slice(0, 5);
      return firstFiveLetter;
    });
  };

  const enterClick = (e) => {
    // setEnter((i) => !i);
    setGuesses((guesses) => [...guesses, e]);
    setLetter((letter) => "");
  };

  const delClick = (e) => {
    setLetter((letter) => letter.slice(0, -1));
  };

  console.log(enter);
  return (
    <>
      <h1>Wordle</h1>
      <p>to restrict words less than 5 charaters</p>
      <p>style keyboard buttons</p>
      <p>import random words</p>
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
      <WholeBoard
        letter={letter}
        word={word}
        enter={enter}
        boardNumber={6}
        guesses={guesses}
      ></WholeBoard>
      <Keyboard onClick={letterClick}></Keyboard>
      <EnterButton
        letter={letter}
        word={word}
        onClick={enterClick}
        guesses={guesses}
      ></EnterButton>
      <DelButton letter={letter} onClick={delClick}></DelButton>
    </>
  );
}

export default App;
