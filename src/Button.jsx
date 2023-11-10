import "./Button.css";

export const Button = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.innerText);
    e.target.blur();
  };

  return (
    <button className="key" onClick={handleClick} id={`keyboard${props.id}`}>
      {props.value}
    </button>
  );
};
