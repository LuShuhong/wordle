import "./Keyboard.css";

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
  "Enter",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "Del",
];

const Button = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.innerText);
  };
  return (
    <button className="key" onClick={handleClick} id={`keyboard${props.id}`}>
      {props.value}
    </button>
  );
};

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
