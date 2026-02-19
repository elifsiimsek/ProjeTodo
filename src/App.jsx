import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoFilter from "./components/TodoFilter";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("books");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const clearAll = () => {
    if (window.confirm("Tüm listeyi silmek istediğine emin misin?")) {
      setTodos([]);
    }
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const todosCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;
  const itemsLeft = todos.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-100 flex justify-center items-start py-10 ">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8  p-8 border-4 border-indigo-500/50">

        <header className="text-center mb-8">
          <h1 className="text-3xl font-mono text-gray-800">
            📚 OKUNACAK KİTAP LİSTESİ
          </h1>
        </header>

      
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
      <div className="bg-gray-100 p-4 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-lg border-indigo-500/75">
          <span className="block text-2xl font-bold text-indigo-600">{todosCount}</span>
          <span className="text-sm text-gray-600">Hepsi</span>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <span className="block text-2xl font-bold text-green-600">{completedCount}</span>
          <span className="text-sm text-gray-600">Okundu</span>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-lg">
         <span className="block text-2xl font-bold text-red-500">{itemsLeft}</span>
         <span className="text-sm text-gray-600">Okunacak</span>
      </div>
    </div>


        <TodoInput addTodo={addTodo} />

        <div className="mt-6 bg-gray-50 rounded-xl p-4 shadow-inner">
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />

          <div className="mt-4 border-t border-gray-300 border-dashed pt-4 transition-all duration-300">
            <TodoFilter
              filter={filter}
              setFilter={setFilter}
              clearAll={clearAll}
              itemsLeft={itemsLeft}
            />
          </div>
        </div>

      </div>
    </div>
  );
}