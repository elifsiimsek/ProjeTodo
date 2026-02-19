export default function TodoFilter({
  filter,
  setFilter,
  clearAll,
  itemsLeft,
}) {
  const btnClass = (type) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition
     ${
       filter === type
         ? "bg-indigo-600 text-white"
         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
     }`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-base font-medium text-gray-500">
          📖 {itemsLeft} kitap kaldı
        </span>

        <button
          onClick={clearAll}
          className="text-base font-medium text-red-600 hover:underline"
        >
          Tümünü Sil
        </button>
      </div>

      <div className="flex justify-center gap-3">
        <button
          className={btnClass("all")}
          onClick={() => setFilter("all")}
        >
          Hepsi
        </button>

        <button
          className={btnClass("completed")}
          onClick={() => setFilter("completed")}
        >  
          Okundu
        </button>

        <button
          className={btnClass("active")}
          onClick={() => setFilter("active")}
        >
          Okunacak
        </button>
      </div>
    </div>
  );
}