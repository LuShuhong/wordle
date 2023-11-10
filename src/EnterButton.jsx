import { Button } from "./Button";

// export const Button = (props) => {
//     const handleClick = (e) => {
//       props.onClick(e.target.innerText);
//     };
//     return (
//       <button className="key" onClick={handleClick} id={`keyboard${props.id}`}>
//         {props.value}
//       </button>
//     );
//   };

export const EnterButton = ({ letter, word, onClick }) => {
  const handleClick = () => {
    if (letter.length < 5) {
      alert("Please enter a five-letter word");
    } else {
      onClick(letter);
    }
  };

  return <Button value={`ENTER`} onClick={handleClick}></Button>;
};
