import { useState, useEffect } from "react";
import "./App.css";

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
    <div className="app-wrapper">
      <div className="container">
        <header className="app-header">
          <h1>OKUNACAK KİTAP LİSTESİ</h1>
        </header>

        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-num">{todosCount}</span>
            <span className="stat-label">Hepsi</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{completedCount}</span>
            <span className="stat-label">Okundu</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{itemsLeft}</span>
            <span className="stat-label">Okunacak</span>
          </div>
        </div>

        <TodoInput addTodo={addTodo} />

        <div className="todo-card">
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
          />

          <div className="todo-footer">
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
