export default function TodoFilter({
  filter,
  setFilter,
  clearAll,
  itemsLeft,
}) {
  return (
    <div className="todo-footer">
      <span className="left-count">
        {itemsLeft} kalan kitap
      </span>

      <div className="filter-group">
        <button
          className={`f-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Hepsi
        </button>

        <button
          className={`f-btn ${filter === "active" ? "active" : ""}`}
          onClick={() => setFilter("active")}
        >
          Okunacak
        </button>

        <button
          className={`f-btn ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Okundu
        </button>
      </div>

      <button className="clear-btn" onClick={clearAll}>
        Hepsini sil
      </button>
    </div>
  );
}
