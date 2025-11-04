import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState(() => {
    // load from localStorage on mount
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // save to localStorage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAll = () => setTodos([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          📝 My To-Do List
        </h1>

        <TodoInput onAdd={addTodo} />

        <ul className="space-y-2 mt-4">
          {todos.length === 0 ? (
            <p className="text-gray-400 text-center">No tasks yet</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </ul>

        {todos.length > 0 && (
          <button
            onClick={clearAll}
            className="mt-6 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
