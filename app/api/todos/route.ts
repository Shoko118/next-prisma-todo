import prisma from "@/app/db";
import { revalidateTag } from "next/cache";

export async function getTodos() {
  "use server";
  return prisma.todo.findMany();
}

export async function toggleTodo(id: string, checked: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { isComplete: checked } });
}

export async function deleteTodo(id: string) {
  "use server";
  await prisma.todo.delete({
    where: { id: id },
  });
  revalidateTag("todo");
}

export async function editTodo(id: string, newTitle: string) {
  "use server";
  await prisma.todo.update({
    where: { id: id },
    data: { title: newTitle },
  });
  revalidateTag("todo");
}
