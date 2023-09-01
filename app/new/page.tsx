import Link from "next/link";
import prisma from "../db";
import { redirect } from "next/navigation";

async function addTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) throw new Error("title cannot be empty");

  await prisma.todo.create({ data: { title, isCompleted: false } });
  redirect("/");
}

export default function NewPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={addTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />

        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
