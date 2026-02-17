import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="input-section">
      <input
        className="todo-input-field"
        type="text"
        placeholder="Yeni kitap ekle..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button className="add-btn" onClick={handleAdd}>
        Ekle
      </button>
    </div>
  );
}
