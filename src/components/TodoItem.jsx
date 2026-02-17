export default function TodoItem({ todo, toggleTodo }) {
  return (
    <div className="todo-item" onClick={() => toggleTodo(todo.id)}>
      <div className={`custom-checkbox ${todo.completed ? "checked" : ""}`}>
        {todo.completed && <span className="check-mark">✓</span>}
      </div>

      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
    </div>
  );
}
