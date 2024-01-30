import React, { useState } from "react";
import "./App.css";
import Child1 from "./components/Child1.tsx";
import Child4 from "./components/Child4.tsx";

function App() {
  console.log("Appレンダリング");

  const [num, setNum] = useState<number>(0);

  const onClickAdd = () => {
    setNum(num + 1);
  };

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <button onClick={onClickAdd}>ボタン</button>
      <p>{num}</p>
      <Child1 />

      <Child4 />
    </div>
  );
}

export default App;
