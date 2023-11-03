import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { word_list } from "./word_list";
import { WholeBoard } from "./Board";
// import { Keyboard } from "./Keyboard";

function App() {
  return (
    <>
      <WholeBoard></WholeBoard>
      {/* <Keyboard></Keyboard> */}
    </>
  );
}

export default App;
