import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoLists() {
  const { todos, filters } = useSelector((state) => state);
  return (
    <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => {
          if (filters.status == "Complete") return todo.complete;
          if (filters.status == "Incomplete") return !todo.complete;
          else {
            return todo;
          }
        })
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
}
