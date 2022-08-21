import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cancelledImage from "../images/cancel.png";
import {
  cancellTask,
  colorSelected,
  toggleTask,
} from "../redux/addTask/actionCreator";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handletoggle = (id) => {
    dispatch(toggleTask(id));
  };
  const handleCancel = (id) => {
    dispatch(cancellTask(id));
  };
  const handleColor = (id, color) => {
    dispatch(colorSelected(id, color));
  };

  console.log(todos);
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
        <input
          onClick={() => handletoggle(todo.id)}
          type="checkbox"
          className="opacity-0 absolute rounded-full"
        />
        <svg
          className={`${
            !todo.complete && "hidden"
          } fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div
        onClick={() => handletoggle(todo.id)}
        className={`select-none flex-1 ${todo.complete && "line-through"}`}
      >
        {todo.task}
      </div>

      <div
        onClick={() => handleColor(todo.id, "green")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
          todo?.color == "green" && "bg-green-500"
        } hover:bg-green-500`}
      ></div>

      <div
        onClick={() => handleColor(todo.id, "yellow")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
          todo?.color == "yellow" && "bg-yellow-500"
        } hover:bg-yellow-500`}
      ></div>

      <div
        onClick={() => handleColor(todo.id, "red")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
          todo?.color == "red" && "bg-red-500"
        } hover:bg-red-500`}
      ></div>

      <img
        onClick={() => handleCancel(todo.id)}
        src={cancelledImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
}
