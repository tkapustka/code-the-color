import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import copy from "copy-to-clipboard";
import ColorQuote from "./components/Map";




// API call Color
const fetchColorHex = async () => {
  const res = await axios.get("https://x-colors.herokuapp.com/api/random");
  console.log(res.data)
  // const mapRgb = res.data.rgb

  return res.data.hex;

};



export default function App() {
  const [colorHex, setColorHex] = useState("#00008B");
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



  // Copy Button
  const onCopyButtonClick = (event) => {
    event.stopPropagation();

    copy(colorHex);
  };

  // On load go to color right away
  useEffect(() => {
    const doAsync = async () => {
      setIsFetchingColorHex(true);
      const newColorHex = await fetchColorHex();
      setColorHex(newColorHex);
      setIsFetchingColorHex(false);
    };
    doAsync();
  }, []);

  if (!colorHex) {
    return;
  }



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
      <p className="website">CodeTheColor.Com</p>
      <div className="title">{hex}</div>
      <button className="copy-button" onClick={onCopyButtonClick}>Copy</button>
      <p className="click-color">Click for a color</p>
      <ColorQuote />
    </div>
  );

}
