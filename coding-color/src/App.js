import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'


const fetchColorHex = async () => {
  const res = await axios.get("https://x-colors.herokuapp.com/api/random");
  return res.data.hex;
};

export default function App() {
  const [colorHex, setColorHex] = useState("#000000");
  const [isFetchingColorHex, setIsFetchingColorHex] = useState(false);

  const triggerNewColor = async () => {
    if (isFetchingColorHex) {
      return;
    }
    setIsFetchingColorHex(true);
    const newColorHex = await fetchColorHex();
    setColorHex(newColorHex);
    setIsFetchingColorHex(false);
  };

  let hex;
  if (isFetchingColorHex) {

  } else {
    hex = (
      <h1>
        <span className="light">{colorHex}</span>
      </h1>
    );
  }

  return (

    <div
      className="App"
      style={{ backgroundColor: colorHex }}
      onClick={triggerNewColor}
    >
      <div className="title">{hex}</div>
      <p className="click-color">Click for a color</p>
    </div>
  );
}
