import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { wordList } from "./word_list";
import { WholeBoard } from "./Board";
import { Keyboard } from "./Keyboard";
import { EnterButton } from "./EnterButton";
import { DelButton } from "./DelButton";

function App() {
  const word = useRef(
    wordList[Math.floor(Math.random() * (wordList.length + 1))]
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

  const enterClick = () => {
    // setEnter((i) => !i);
    if (letter.length < 5) {
      alert("Please enter a five-letter word");
    } else {
      setGuesses((guesses) => [...guesses, letter]);
      setLetter((letter) => "");
    }
  };

  const delClick = () => {
    setLetter((letter) => letter.slice(0, -1));
  };

  console.log(enter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        enterClick();
      } else if (e.key === "Backspace") {
        delClick();
      } else if (/^[A-Za-z]$/.test(e.key)) {
        letterClick(e.key.toLowerCase());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [letter, guesses]);

  return (
    <>
      <h1>Wordle</h1>

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
