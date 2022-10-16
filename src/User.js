import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App(props) {
  useEffect(() => {
    console.log("useEffect with props " + props.count);
    // yha hamne jo [props.count] likha hai iska mean hai ki ham bs data ko update kare tabhi useEffect call ho otherwise nhi
  }, [props.count]);

  return (
    <div className="App">
      <h2>Count Props : {props.count}</h2>
      <h1>data Props : {props.data}</h1>
    </div>
  );
}
