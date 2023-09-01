"use client";

import { useState } from "react";

type TodoItemProps = {
  id: string;
  title: string;
  isComplete: boolean;
  toggleTodo: (id: string, checked: boolean) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newTitle: string) => void;
};

export default function TodoItem({ id, title, isComplete, toggleTodo, deleteTodo, editTodo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<TodoItemProps["title"]>(title);

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <input
        type="checkbox"
        defaultChecked={isComplete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        className="cursor-pointer peer"
      />

      {isEditing ? (
        <>
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <button
            onClick={() => {
              editTodo(id, newTitle);
              setIsEditing(false);
            }}
          >
            Done
          </button>
        </>
      ) : (
        <>
          <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
            {title}
          </label>
          <button className="border-2 border-blue-500 px-3 py-2 ml-2" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}

      <button className="border-2 border-red-500 px-3 py-2 ml-2" onClick={() => deleteTodo(id)}>
        Delete
      </button>

      <style jsx>{`
        input {
          color: black; /* Ensure the color remains visible when focused */
        }
      `}</style>
    </div>
  );
}
