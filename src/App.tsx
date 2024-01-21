import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  // 入力フォームの中身をState管理する
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);
  const [num, setNum] = useState(0);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    setNum(num + 1);
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
      <h2>メモ一覧</h2>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <p>{memo}</p>
          </li>
        ))}
      </ul>
      <h2>メモの件数</h2>
      <p>{num}</p>
    </div>
  );
}

export default App;