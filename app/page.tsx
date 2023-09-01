import Link from "next/link";
import TodoItem from "@/components/TodoItem";
import { deleteTodo, editTodo, getTodos, toggleTodo } from "./api/todos/route";

export default async function HomePage() {
  const todos = await getTodos();

  return (
    <div>
      <div className="flex justify-around items-center">
        <div className="text-xl">Todo App</div>
        <Link href={"/new"} className="px-3 py-2 border-2 border-slate-400 cursor-pointer rounded-md">
          New
        </Link>
      </div>

      <div className="mt-8">
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
          );
        })}
      </div>
    </div>
  );
}
