import "./Keyboard.css";
import { Button } from "./Button";

let keyboard = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

export const Keyboard = ({ onClick }) => {
  return (
    <div className="keyboard">
      {keyboard.map((element, index) => {
        return (
          <Button
            key={index}
            id={index}
            value={element}
            onClick={onClick}
          ></Button>
        );
      })}
    </div>
  );
};
