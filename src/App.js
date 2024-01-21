import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  // 入力フォームの中身をState管理する
  const [text, setText] = useState("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    console.log(text);
  };

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText}></input>
      <button onClick={onClickAdd}>追加</button>
      <p>{text}</p>
    </div>
  );
}

export default App;
