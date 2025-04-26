import "./App.css";
import { useState } from "react";
import ToonCard from "./components/ToonCard";
import { DANDY, getRandomToon } from "./toons";
import Title from "./components/Title";

export default function App() {
  const [randomToon, setRandomToon] = useState(DANDY);

  function randomOnClick() {
    const randomToon = getRandomToon();
    setRandomToon(randomToon);
  }

  return (
    <>
      <Title text={"Toon Selector"}/>
      <ToonCard name={randomToon.name} image={randomToon.image}/>
      <button className="random-btn" onClick={() => randomOnClick()}>Random</button>
    </>
  );
}
