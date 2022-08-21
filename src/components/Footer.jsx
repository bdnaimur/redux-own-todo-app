import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changedStatus,
  colorToggleAction,
} from "../redux/filter/filterActionCreator";
export default function Footer() {
  const { filters, todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const leftTask = todos.filter((todo) => !todo.complete);

  const findRemainTask = (item) => {
    switch (item) {
      case 1:
        return "One task";
      case 0:
        return "No task";

      default:
        return `${item} Task`;
    }
  };

  const handleStatus = (staus) => {
    dispatch(changedStatus(staus));
  };

  const handleChangedColor = (color) => {
    filters.colors.includes(color)
      ? dispatch(colorToggleAction(color))
      : dispatch(colorToggleAction(color, "added"));
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{findRemainTask(leftTask.length)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatus("All")}
          className={`cursor-pointer ${filters.status == "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatus("Incomplete")}
          className={`cursor-pointer ${
            filters.status == "Incomplete" && "font-bold"
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatus("Complete")}
          className={`cursor-pointer ${
            filters.status == "Complete" && "font-bold"
          }`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleChangedColor("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters?.colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleChangedColor("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters?.colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleChangedColor("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters?.colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
}
