import "./styles.css";
import React, { useEffect, useState } from "react";
import User from "./User";

export default function App() {
  let [data, setData] = useState(10);
  let [count, setCount] = useState(100);

  // useEffect(()=>{
  //   console.log("useEffect")
  //   // yha hamne jo [data] likha hai iska mean hai ki ham bs data ko update kare tabhi useEffect call ho otherwise nhi
  // },[data])

  // // yha pr ye count ko alert karega with count addition
  // useEffect(()=>{
  //     alert("count "+count)
  //   // yha hamne jo [count] likha hai iska mean hai ki ham bs data ko update kare tabhi useEffect call ho otherwise nhi
  // },[count])

  return (
    <div className="App">
      {/* <h1>useEffect-With-Specific-State-And_Props </h1> */}
      {/* <h2>data : {data}</h2>
      <h1>count : {count}</h1> */}

      <User count={count} data={data} />
      <button onClick={() => setData(data + 1)}>Update data</button>
      <button onClick={() => setCount(count + 1)}>Update count </button>
    </div>
  );
}
