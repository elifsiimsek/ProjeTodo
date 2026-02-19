export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">
        📭 Henüz kitap eklenmedi
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between gap-3 bg-white p-3 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-5 h-5 accent-indigo-600 cursor-pointer"
            />

            <span
              className={`flex-1 text-gray-800 ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </span>
          </div>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-black-500 hover:opacity-80 font-medium "
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}