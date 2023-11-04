import "./Board.css";

let guessingBoard = Array.from({ length: 30 });

const Board = (props) => {
  return (
    <div className="board" id={`guessingBoard${props.id}`}>
      {props.value[props.id]}
    </div>
  );
};

export const WholeBoard = (props) => {
  return (
    <div className="whole-board">
      {guessingBoard.map((e, index) => {
        return <Board key={index} id={index} value={props.letter}></Board>;
      })}
    </div>
  );
};
