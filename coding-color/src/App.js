import React, { useState, useEffect } from "react";
import "./App.css";


export default function App() {
  const colors = [
    { title: "Red", color: "#de1212" },
    { title: "Blue", color: "#122dde" },
    { title: "Green", color: "#32a852" },
    { title: "Yellow", color: "#d7de12" }
  ];

  const [colorValue, setColorValue] = useState(0);

  const handleClick = () =>
    setColorValue(colorValue + 1 < colors.length ? colorValue + 1 : 0);

  return (
    <div className="App" style={{ backgroundColor: colors[colorValue].color }}>
      <h1>Selected color: {colors[colorValue].title}</h1>
      <button className="btn" onClick={handleClick}>
        Click to change color
      </button>
    </div>
  );
}