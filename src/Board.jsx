import "./Board.css";

let guessingBoard = Array.from({ length: 30 });

export const Board = (props) => {
  return (
    <div className="board" id={props.id}>
      {props.id}
    </div>
  );
};

export const WholeBoard = () => {
  return (
    <div className="whole-board">
      {guessingBoard.map((element, index) => {
        return <Board key={index} id={index}></Board>;
      })}
    </div>
  );
};
