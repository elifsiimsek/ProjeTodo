import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div className="todo-list-container">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <div className="empty-list">Liste boş görünüyor.</div>
      )}
    </div>
  );
}
