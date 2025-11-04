export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md px-3 py-2 ${
        todo.completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 transition text-sm"
      >
        ✕
      </button>
    </li>
  );
}
