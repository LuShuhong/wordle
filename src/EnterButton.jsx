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

export const EnterButton = ({ letter, onClick }) => {
  const enterClick = (e) => {};
  return <Button value={`ENTER`} onClick={enterClick}></Button>;
};
