import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!input.trim()) return;

    addTodo(input);
    setInput(""); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Yeni kitap ekle..."
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      <button
        type="submit"
        className="px-5 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 active:scale-95 transition ">
        Ekle
      </button>
    </form>
  );
}