import { Button } from "./Button";

export const DelButton = ({ letter, onClick }) => {
  const handleClick = () => {
    onClick(letter);
  };
  return <Button value={`Del`} onClick={handleClick}></Button>;
};
